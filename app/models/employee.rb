class Employee < ApplicationRecord
  has_one :profile
  has_many :work_histories, through: :profile
  has_secure_password
end
