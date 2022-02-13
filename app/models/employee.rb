class Employee < ApplicationRecord
  has_secure_password
  has_one :profile, dependent: :destroy
  has_one :document, dependent: :destroy
  has_one_attached :file, dependent: :destroy
  has_many :experiences, dependent: :destroy 
  has_many :applicants, dependent: :destroy
  has_many :jobs, through: :applicants
  validates :email, uniqueness: true
  validates :email, presence: true


  # def name
  #   [profile.fname, profile.lname].compact.join(" ")  
  # end

  def send_password_reset
    self.password_reset_token = generate_base64_token
    self.password_reset_sent_at = Time.zone.now
    save!
    EmployeeMailer.password_reset(self).deliver_now
  end

  def password_token_valid?
    (self.password_reset_sent_at + 1.hour) > Time.zone.now
  end

  def reset_password(password)
    self.password_reset_token = nil
    self.password = password
    save!
  end

  private

  def generate_base64_token
    test = SecureRandom.urlsafe_base64
  end

end
