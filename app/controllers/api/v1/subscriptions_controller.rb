class Api::V1::SubscriptionsController < ApplicationController
  before_action :set_subscription, except: %i[create]   
  before_action :set_employer
  wrap_parameters :subscription, include: [:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active]
  
  def show
    render json: @subscription
  end
  
  def create
    @subscription = Subscription.new(subscription_params)
    if @subscription.save
      @employer.update(status: true)
      if @subscription.plan_id == 1
        @employer.update(monthly: true)
      else 
        @employer.update(yearly: true)
      end
      render json: EmployerSerializer.new(@employer)
      # render json: @subscription, status: :created
    else
      render json: @subscription.errors, status: :unprocessable_entity
    end
  end
  
  def update
    if @subscription.update(subscription_params)
      render json: @subscription
    else
      render json: @subscription.errors, status: :unprocessable_entity
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
      params.require(:subscription).permit(:card_number, :exp_month, :exp_year, :cvc, :employer_id, :plan_id, :stripe_id, :active)
    end

end
