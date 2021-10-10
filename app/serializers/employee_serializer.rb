class EmployeeSerializer
    include JSONAPI::Serializer
    attributes :id, :email, :profile, :applicants, :work_histories, :jobs
    # :name 
    has_one :profile
    has_many :work_histories, through: :profile
    has_many :applicants
    has_many :jobs, through: :applicants
end 