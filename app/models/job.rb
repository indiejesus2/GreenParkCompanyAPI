class Job < ApplicationRecord
    belongs_to :employer
    has_many :applicants, dependent: :destroy
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    has_many :experiences, through: :employees
    geocoded_by :address
    before_save :proximity, :potential
    after_update :updateTrade, :updatedProximity 
    after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

  def company
    @employer = self.employer
    return @employer.name
  end

  def employer
    employer = Employer.find_by_id(employer_id)
  end

  def proximity
    if trade != "Other/None"
      profiles = Profile.all
      applicants = profiles.map{|profile| 
        distance = !!profile.commute ? profile.commute : 100
        if profile.trade = trade && profile.distance_to(address) <= distance
          profile
        end
      }
    else
      profiles = Profile.all
      applicants = profiles.map{|profile| 
      distance = !!profile.commute ? profile.commute : 100
        if profile.trade = trade && profile.distance_to(address) <= distance
          profile
        end
      }
    end
    applicants = applicants.compact()
    applicants.each{|applicant|
      if Applicant.where(job_id: id, employee_id: applicant.employee_id).length == 0 
        Applicant.create(employee_id: "#{applicant.employee_id}", employer_id: "#{employer_id}", job_id: "#{id}", distance: distance_to(applicant))
      end
    }
    self.potential
  end

  def posted
    self.status = true
  end

  def closed
    self.status = false
  end

  def potential
    @types = {}
    @types = {
        "jobtype": jobtype.join().split(", "),
        "schedule": schedule.join().split(", "),
        "shifts": shifts.join().split(", "),
        "seasonstart": seasonstart,
        "seasonend": seasonend,
        "minpay": minpay,
        "paytype": paytype,
        "license": license,
      }
      employees.each{|employee|
          @rating = 1
          if employee.profile.minpay <= @types[:minpay] && employee.profile.paytype == @types[:paytype]
            @rating+=1
          end
          if employee.profile.license == @types[:license]
            @rating+=1
          end
          @types[:jobtype].each {|type| 
            if employee.profile.jobtype.include?(type)
              @rating+=1
            end
          }
          @types[:schedule].each {|type| 
            if employee.profile.schedule.include?(type)
              @rating+=1
            end
          }
          @types[:shifts].each {|type| 
            if employee.profile.shifts.include?(type)
              @rating+=1
            end
          }
          applicant = Applicant.find_by(employee_id: employee.id, job_id: id)
          if !!applicant && applicant.rating != @rating
            applicant.update(rating: @rating)
            applicant.save
          end
      }
  end

  def updateTrade
    applicants = self.applicants
    if applicants.length > 0
      applicants.each{|applicant|
        # if a job's trade or address is changed, current applicants must be checked to see if they are a match.
        # if trade doesn't match applicant trade or Profile isn't near the updated address
        if applicant.profile.trade != trade && applicant.profile.trade != "Other/None"

          Applicant.destroy(applicant.id)
        end
      }
    end
  end

  def updatedProximity
    applicants = self.applicants
    # distance = !!commute ? commute : 100
    applicants.each{|applicant| 
      profile = Profile.find_by(employee_id: applicant.employee_id)
      distance = !!profile.commute ? profile.commute : 100
      if profile.distance_to(self) > distance
        Applicant.destroy(applicant.id) 
      elsif applicant.distance != profile.distance_to(self)
        applicant.update(distance: distance_to(self))
      end
    }
    # if applicants.length > 0
    #   applicants.each{|applicant|
    # }
  end

end  