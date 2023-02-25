class Applicant < ApplicationRecord
  belongs_to :employee
  belongs_to :employer
  belongs_to :job
  has_one :profile, through: :employee
  # after_save :match

  def company
    @employer = Employer.find_by_id(employer_id)
    @employer.name
  end

  # def match
  #   

end
