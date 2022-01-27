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

end
