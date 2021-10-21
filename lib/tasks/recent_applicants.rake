task dailyrundown: :environment do
    employers = Employer.all
    employers.each {|employer| 
        EmployerMailer.with(employer: employer).candidates_email.deliver
    }
end