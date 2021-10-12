class Job < ApplicationRecord
    belongs_to :employer
    has_many :applicants, dependent: :destroy
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    has_many :experiences, through: :employees
    geocoded_by :address
    # reverse_geocoded_by :latitude, :longitude
    before_save :proximity, :potential
    after_validation :geocode
    # after_validation :reverse_geocode

  def address
    [city, state].compact.join(', ')
  end

  def proximity
    profiles = Profile.where("industry = ?", industry).near(address, 100)
    profiles.each {|profile| 
        Applicant.create(employee_id: "#{profile.employee_id}", employer_id: "#{employer_id}", job_id: "#{id}", distance: distance_to(profile))
      }
  end

  def posted
    self.status = true
  end

  def payrange

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
      "maxpay": maxpay,
      "license": license,
    }
    employees.each{|employee|
        @rating = 1
        if employee.profile.minpay <= @types[:maxpay] && employee.profile.minpay >= @types[:minpay]
          print("minpay")
          @rating+=1
        elsif employee.profile.maxpay >= @types[:minpay] && employee.profile.maxpay <= @types[:maxpay]
          print("maxpay")
          @rating+=1
        end
        if employee.profile.license == @types[:license]
          print("license")
          @rating+=1
        end
        @types[:jobtype].each {|type| 
          if employee.profile.jobtype.include?(type)
            print("jobtype")
            @rating+=1
          end
        }
        @types[:schedule].each {|type| 
          if employee.profile.schedule.include?(type)
            print("schedule")
            @rating+=1
          end
        }
        @types[:shifts].each {|type| 
          if employee.profile.shifts.include?(type)
            print("shifts")
            @rating+=1
          end
        }
        applicant = Applicant.find_by(employee_id: employee.id, job_id: id)
        if applicant.rating != @rating
          applicant.update(rating: @rating)
          applicant.save
        end
    }
  end

end  