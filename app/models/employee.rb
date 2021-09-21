class Employee < ApplicationRecord
  has_one :profile
  has_many :work_histories, through: :profile
  has_many :applicants
  has_many :jobs, through: :applicants
  has_secure_password

  # def name
    
  # end
end
