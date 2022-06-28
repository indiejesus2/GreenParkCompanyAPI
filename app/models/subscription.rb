class Subscription < ApplicationRecord
  attr_accessor :card_number, :exp_month, :exp_year, :cvc  
  belongs_to :plan
  belongs_to :employer  
  validates :stripe_id, presence: true, uniqueness: true  
  before_validation :create_stripe_reference, on: :create  
  before_update :cancel_stripe_subscription, if: :subscription_inactive?
  
  def create_stripe_reference
    begin
      Stripe::Customer.create_source(
        employer.stripe_id,
        { source: generate_card_token }
      )    
      response = Stripe::Subscription.create({
        customer: employer.stripe_id,
        items: [
          { price: plan.stripe_price_id }
        ]
      })    
      self.stripe_id = response.id
    rescue Stripe::InvalidRequestError => e
      errors.errors.push(e.message)
    rescue Stripe::CardError => e
      errors.errors.push(e.message)
    end
  end  
  
  def generate_card_token
    begin
      Stripe::Token.create({
        card: {
          number: card_number,
          exp_month: exp_month,
          exp_year: exp_year,
          cvc: cvc
        }
      }).id
    rescue Stripe::CardError => e
      errors.errors.push(e.message)
    end
    #   byebug
    # end
  end

  def cancel_stripe_subscription
    Stripe::Subscription.delete(stripe_id)
  end  
  
  def subscription_inactive?
    !active
  end

  def retrieve_stripe_subscription
    Stripe::Subscription.retrieve(stripe_id)
  end

  def next_billing
    nextBill = retrieve_stripe_subscription.current_period_end
    # return moment(nextBill).unix()
  end

end