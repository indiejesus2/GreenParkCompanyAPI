class JobSerializer
    include JSONAPI::Serializer
    belongs_to :employer
    has_many :applicants
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    has_many :experiences, through: :profiles

    # , links: {
    #     self: -> (object) {
    #         "http://localhost:3000/api/v1/employers/#{object.employer_id}/jobs/#{object.id}"
    #     },
    #     related: -> (object) {
    #         "http://localhost:3000/api/v1/employers/#{object.employer_id}/jobs/#{object.id}/employees"
    #     }
    # }
    attributes :company do |object|
        @employer = Employer.find_by_id(object.employer_id)
        "#{@employer.name}"
    end

    attributes :createdDate do |object|
        object.created_at.strftime("%B %d, %Y")
    end

    # attributes :files do |object|
    #     byebug
        
    # end

    attributes :id, :employer_id, :status, :title, :city, :state, :zipcode, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :paytype, :trade, :description, :applicants, :employees, :profiles, :experiences, :company, :employer, :created_at


end