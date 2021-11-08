class Profile < ApplicationRecord
  belongs_to :employee
  has_one :document, through: :employee
  has_many :experiences
  has_many :jobs, through: :employee
  geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  after_validation :geocode, :proximity, :potential

  # after_validation :reverse_geocode

  def address
    [city, state].compact.join(', ')
  end

  def name
    [fname, lname].compact.join(' ')
  end

  def proximity    
    jobs = Job.where("industry = ?", industry).near(address, 100)
    jobs.each {|job|
      if Applicant.where(job_id: job.id, employee_id: employee_id).length == 0 && !job.applicants.map{|applicant| applicant.employee_id == employee_id}
        Applicant.create(employee_id: "#{employee_id}", employer_id: "#{job.employer_id}", job_id: "#{job.id}", distance: distance_to(job))
      end
    }
    # if jobs.length > 0
    #   EmployeeMailer(employee: @employee).jobs_email.deliver_later
    # end
  end

  # def posted
  #   self.status = true
  # end

  # def payrange

  # end

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
    jobs.each{|job|
        @rating = 1
        if job.minpay <= @types[:minpay] && job.paytpe == @types[:jobtype]
          @rating+=1
        end
        if job.license == @types[:license]
          @rating+=1
        end
        @types[:jobtype].each {|type| 
          if job.jobtype.include?(type)
            @rating+=1
          end
        }
        @types[:schedule].each {|type| 
          if job.schedule.include?(type)
            @rating+=1
          end
        }
        @types[:shifts].each {|type| 
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

end
