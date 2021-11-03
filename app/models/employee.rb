class Employee < ApplicationRecord
  has_secure_password
  has_one :profile
  has_one_attached :file
  has_many :experiences
  has_many :applicants
  has_many :jobs, through: :applicants
  validates :email, uniqueness: true


  # def name
  #   [profile.fname, profile.lname].compact.join(" ")  
  # end

end
