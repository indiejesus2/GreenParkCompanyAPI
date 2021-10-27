class EmployeeSerializer
    include JSONAPI::Serializer
    attributes :id, :email, :profile, :applicants, :experiences, :jobs
    # :name 
    has_one :profile
    # has_one :document
    has_many :experiences
    has_many :applicants
    has_many :jobs, through: :applicants
end 