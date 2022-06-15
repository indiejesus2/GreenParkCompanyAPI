class EmployerSerializer
    include JSONAPI::Serializer
    has_many :jobs
    has_many :applicants, through: :jobs
    # has_one :subscription
    # has_many :employees, through: :applicants
    # byebug
    attributes :id, :email, :name, :phone, :description, :monthly, :yearly, :trial, :trial_period, :status, :applicants
end