class Job < ApplicationRecord
    belongs_to :employer
    has_many :applicants, dependent: :destroy
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    geocoded_by :address
    # reverse_geocoded_by :latitude, :longitude
    before_save :proximity
    after_validation :geocode
    # after_validation :reverse_geocode

  def address
    [city, state].compact.join(', ')
  end

  def proximity
    profiles = Profile.where("industry = ?", "#{industry}").near(self.address, 100)
    profiles.each {|profile| 
        Applicant.create(employee_id: "#{profile.employee_id}", employer_id: "#{employer_id}", job_id: "#{id}")
      }
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