class Api::V1::SubscriptionsController < ApplicationController
  before_action :set_subscription, only: %i[show, update]   
  before_action :set_employer
  wrap_parameters :subscription, include: [:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active, :id]
  
  def show
    render json: @subscription
  end
  
  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      @employer.update(status: true)
      if @subscription.plan_id == 1
        @employer.update(monthly: true)
      elsif @subscription.plan_id == 2
        @employer.update(yearly: true)
      end
      EmployerMailer.with(employer: @employer).welcome_email.deliver_later
      render json: {contractor: @employer, subscription: SubscriptionSerializer.new(@employer.subscription)}, prerender: true
    else
      render json: {error: @subscription.errors.first, status: :unprocessable_entity}
    end
  end
  
  def update
    # if !subscription_params.card_number.includes(@employer.last_four)
    @subscription.update(subscription_params)
    # byebug
    if @subscription.save
      if @subscription.plan_id == 1 && @employer.monthly == false
        @employer.update(monthly: true)
      elsif @subscription.plan_id == 2 && @employer.yearly == false
        @employer.update(yearly: true)
      end
      render json: {contractor: @employer, subscription: SubscriptionSerializer.new(@employer.subscription)}, prerender: true
      # render json: @subscription
    else
      render json: {error: @subscription.errors, status: :unprocessable_entity}
    end
  end
  
  private

  def set_employer
    @employer = Employer.find(params[:employer_id])
  end

    def set_subscription
      @subscription = Subscription.find(params[:id])
    end      
    
    def subscription_params
      params.require(:subscription).permit(:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active, :id)
    end

end
