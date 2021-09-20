class ApplicantSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :employee 
    belongs_to :employer 
    belongs_to :job
    attributes :id, :employee_id, :employer_id, :job_id
end