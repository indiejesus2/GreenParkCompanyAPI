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
    profiles = Profile.where("industry = ?", industry).near(self.address, 100)
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
    @types = {}
    @types = {
      "jobtype": jobtype,
      "schedule": schedule,
      "shifts": shifts,
      "seasonstart": seasonstart,
      "seasonend": seasonend,
      "minpay": minpay,
      "maxpay": maxpay,
      "license": license,
    }
    byebug
    match = employees.map{|employee| 
    jobtype.each do |type| 
      if employee.profile.jobtype = type
        return employee
      end
    end
  }
  
    jobtype = self.jobtype
    schedule = self.schedule
    address = self.address
  end

end  