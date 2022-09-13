class Subscription < ApplicationRecord
  attr_accessor :card_number, :exp_month, :exp_year, :cvc, :expiryDate
  belongs_to :plan
  belongs_to :employer  
  validates :stripe_id, presence: true, uniqueness: true  
  before_validation :create_stripe_reference, on: :create  
  before_update :cancel_stripe_subscription, if: :subscription_inactive?
  before_update :update_stripe_reference, if: :update_card?
  
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
  
  def update_stripe_reference
    begin
      Stripe::Customer.create_source(
        employer.stripe_id,
        { source: generate_card_token }
      )
      Stripe::Subscription.update(
        stripe_id, 
        {
          default_payment_method: generate_card_token.card.id
        }
      )
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
  end

  def cancel_stripe_subscription
    Stripe::Subscription.update(
      stripe_id,  
      {
        cancel_at_period_end: true
      })
  end  
  
  def subscription_inactive?
    !active
  end

  def update_card?
    card_number != ""
  end

  def current_subscription
    Stripe::Subscription.retrieve(stripe_id)
  end

  def next_billing
    nextBill = current_subscription.current_period_end
  end

  def cancel_at
    cancel_at = current_subscription.cancel_at
  end

  # def stripe_active
  #   stripe_active = current_subscription.active
  # end

end