class EmployerSerializer
    include JSONAPI::Serializer
    # has_many :jobs
    # has_many :applicants, through: :jobs
    # has_many :employees, through: :applicants
    # byebug
    attributes :id, :email, :name, :subscription, :status, :applicants
end