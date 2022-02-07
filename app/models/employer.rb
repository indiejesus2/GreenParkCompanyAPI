class Employer < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true
  has_many :jobs
  has_many :applicants, through: :jobs
end
