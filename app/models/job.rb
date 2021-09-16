class Job < ApplicationRecord
    belongs_to :employer
    has_many :employees
    geocoded_by :address
    after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

  def proximity
    # let rate = 0
    # byebug
    Profile.near(self.address, 100)
    
    # Profile.where("jobtype && ?", "{FT}")
    # Profile.where("#{key} && ?", "#{values}")
  end

  def potential
    jobtype = self.jobtype
    schedule = self.schedule
    skills = self.skills
    certificates = self.certificates
    
  end

end  