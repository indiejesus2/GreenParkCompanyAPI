class EmployerSerializer
    include JSONAPI::Serializer
    has_many :jobs
    has_many :applicants, through: :jobs
    has_many :employees, through: :applicants
    attributes :id, :email, :name, :jobs, :applicants, :employees
end