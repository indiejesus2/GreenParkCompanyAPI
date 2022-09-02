class Employer < ApplicationRecord
  has_secure_password
  validates :email, presence: true, uniqueness: true
  validates :stripe_id, presence: true, uniqueness: true
  has_many :jobs, dependent: :destroy
  has_many :applicants, through: :jobs
  has_one :subscription
  before_validation :create_stripe_reference, on: :create  
  
  def create_stripe_reference
    response = Stripe::Customer.create(email: email)
    self.stripe_id = response.id
  end

  def send_password_reset
    self.password_reset_token = generate_base64_token
    self.password_reset_sent_at = Time.zone.now
    save!
    EmployerMailer.password_reset(self).deliver_now
  end

  def password_token_valid?
    (self.password_reset_sent_at + 1.hour) > Time.zone.now
  end

  def reset_password(password)
    self.password_reset_token = nil
    self.password = password
    save!
  end

  def retrieve_customer
    Stripe::Customer.retrieve(stripe_id)
  end

  def current_card
    card = retrieve_customer.default_source
    Stripe::Customer.retrieve_source(
      stripe_id,
      card,
    )
    if !!last4 
      return last4
    else 
      return ""
    end
  end

  private

  def generate_base64_token
    test = SecureRandom.urlsafe_base64
  end
end