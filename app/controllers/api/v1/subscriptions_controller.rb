class Api::V1::SubscriptionsController < ApplicationController
  before_action :set_subscription, only: %i[show, update]   
  before_action :set_employer
  wrap_parameters :subscription, include: [:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active, :id, :expiryDate, :trial]
  
  def show
    render json: @subscription
  end
  
  def create
    current = subscription_params
    if current[:trial] == "collar"
      @employer.update(status: true, trial: true)
      EmployerMailer.with(employer: @employer).welcome_email.deliver_later
      render json: {contractor: @employer, subscription: SubscriptionSerializer.new(@employer.subscription)}, prerender: true
    else 
      current[:exp_month] = current[:expiryDate].split()[0]
      current[:exp_year] = current[:expiryDate].split()[2]
      @subscription = Subscription.new(current)
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
  end
  
  def update
    # if !subscription_params.card_number.includes(@employer.last_four)
    updated = subscription_params
    updated[:exp_month] = updated[:expiryDate].split()[0]
    updated[:exp_year] = updated[:expiryDate].split()[2]
    @subscription.update(updated)
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
      params.require(:subscription).permit(:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active, :id, :expiryDate, :trial)
    end


end
