class Applicant < ApplicationRecord
  belongs_to :employee
  belongs_to :employer
  belongs_to :job
  has_one :profile, through: :employee
end
