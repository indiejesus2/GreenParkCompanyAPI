class Job < ApplicationRecord
    belongs_to :employer
    has_many :applicants, dependent: :destroy
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    geocoded_by :address
    before_save :proximity
    after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

  def proximity
    profiles = []
    self.skills.each {|skill| profiles << Profile.where(":skills = ANY (skills)", skills: "#{skill}").near(self.address, 100)}
    profiles.each {|profile| 
      profile.each {|pro|
        Applicant.create(employee_id: "#{pro.employee_id}", employer_id: "#{self.employer_id}", job_id: "#{self.id}")
      }}
    # Profile.where("jobtype && ?", "{FT}")
    # Profile.where("#{key} && ?", "#{values}")
  end

  def posted
    self.status = true
  end

  def potential
    jobtype = self.jobtype
    schedule = self.schedule
    skills = self.skills
    certificates = self.certificates
    address = self.address
  end

end  