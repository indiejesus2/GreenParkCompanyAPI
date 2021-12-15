class Job < ApplicationRecord
    belongs_to :employer
    has_many :applicants, dependent: :destroy
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    has_many :experiences, through: :employees
    geocoded_by :address
    after_save :proximity, :potential
    # before_update :updated 
    after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

  def company
    @employer = self.employer
    return @employer.name
  end

  def proximity
    if industry != "Other/None"
      profiles = Profile.where("industry = ?", industry).near(address, 100)
    else
      profiles = Profile.near(address, 100)
    end
    profiles.each {|profile|
      if Applicant.where(job_id: id, employee_id: profile.employee_id).length == 0 
        Applicant.create(employee_id: "#{profile.employee_id}", employer_id: "#{employer_id}", job_id: "#{id}", distance: distance_to(profile))
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

  def updated
    applicants = self.applicants
    if applicants.length > 0
      applicants.each{|applicant|
        # if a job's industry or address is changed, current applicants must be checked to see if they are a match.
        # if industry doesn't match applicant industry or Profile isn't near the updated address
        if industry != "Other/None"
          if applicant.profile.industry != industry || Profile.near(address, 100).include?(applicant.profile) != true
            Applicant.destroy(applicant.id)
          end
        end
      }
    end
  end

end  