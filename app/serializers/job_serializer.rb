class JobSerializer
    include JSONAPI::Serializer
    belongs_to :employer
    has_many :applicants
    has_many :employees, through: :applicants
    has_many :profiles, through: :employees
    # , links: {
    #     self: -> (object) {
    #         "http://localhost:3000/api/v1/employers/#{object.employer_id}/jobs/#{object.id}"
    #     },
    #     related: -> (object) {
    #         "http://localhost:3000/api/v1/employers/#{object.employer_id}/jobs/#{object.id}/employees"
    #     }
    # }
    attributes :id, :employer_id, :status, :title, :city, :state, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :maxpay, :industry, :description, :employees, :profiles
end