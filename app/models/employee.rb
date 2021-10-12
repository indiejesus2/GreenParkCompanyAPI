class Employee < ApplicationRecord
  has_one :profile
  has_many :experiences
  has_many :applicants
  has_many :jobs, through: :applicants
  has_secure_password

  # def name
  #   [profile.fname, profile.lname].compact.join(" ")  
  # end

end
