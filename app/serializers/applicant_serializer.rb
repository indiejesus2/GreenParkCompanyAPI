class ApplicantSerializer
    include JSONAPI::Serializer
    belongs_to :employee 
    belongs_to :employer 
    belongs_to :job
    has_one :profile, through: :employee
    attributes :id, :employee_id, :employer_id, :job_id, :rating, :employee, :profile
end