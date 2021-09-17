class Employer < ApplicationRecord
  has_secure_password
  has_many :jobs
  has_many :applicants, through: :jobs
end
