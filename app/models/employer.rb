class Employer < ApplicationRecord
  has_secure_password
  validates :email, uniqueness: true
  has_many :jobs, dependent: :destroy
  has_many :applicants, through: :jobs
end
