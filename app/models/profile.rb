class Profile < ApplicationRecord
  belongs_to :employee
  has_one :document, through: :employee
  has_many :jobs, through: :employee
  geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  after_validation :geocode
  before_save :proximity, :potential
  after_update :updateTrade, :updatedProximity
  # after_validation :proximity, :potential

  # after_validation :reverse_geocode

  def address
    [city, state].compact.join(', ')
  end

  def name
    [fname, lname].compact.join(' ')
  end

  def employee
    Employee.find_by_id(employee_id)
  end

  def proximity    
    distance = !!commute ? commute : 100
    industry = Job.where("trade = ?", trade).near(address, distance)
    jobs = Job.where("trade = ", "Other/None").near(address, distance)
    jobs.concat(industry)
    if jobs.length > 0
      jobs.each {|job|
        if Applicant.where(job_id: job.id, employee_id: employee_id).length == 0 && !job.applicants.detect{|applicant| applicant.employee_id == employee_id}
          Applicant.create(employee_id: "#{employee_id}", employer_id: "#{job.employer_id}", job_id: "#{job.id}", distance: distance_to(job))
        end
      }
    end
  end

  def findcity
    locations = Geocoder.search(zipcode)
    city = locations.filter{|location| location.country_cody == "us"}
    return [city.address.township, city.address.state]
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
    employee = Employee.find_by_id(employee_id)
    employee.jobs.each{|job|
      
        @rating = 1
        if job.minpay <= @types[:minpay] && job.paytype == @types[:paytype]
          @rating+=1
        end
        if job.license == @types[:license]
          @rating+=1
        end
        @types[:jobtype].each{|type| 
          if job.jobtype.include?(type)
            @rating+=1
          end
        }
        @types[:schedule].each{|type| 
          if job.schedule.include?(type)
            @rating+=1
          end
        }
        @types[:shifts].each{|type| 
          if job.shifts.include?(type)
            @rating+=1
          end
        }
        applicant = Applicant.find_by(employee_id: employee_id, job_id: job.id)
        if applicant.rating != @rating
          applicant.update(rating: @rating)
          applicant.save
        end
    }
  end

  def updateTrade
    applicants = employee.applicants
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
    applicants = employee.applicants
    jobs = employee.jobs
    distance = !!commute ? commute : 100
    jobs.each{|job|
      applicant = Applicant.find_by(job_id: job.id)
      if distance_to(job) > distance
        Applicant.destroy(applicant.id)
      elsif applicant.distance != distance_to(job)
        applicant.update(distance: distance_to(job))
        applicant.save
      end
    }
    # if applicants.length > 0
    #   applicants.each{|applicant|
    # }
  end

  # || Job.near(address, 100).include?(applicant.profile) != true

end
