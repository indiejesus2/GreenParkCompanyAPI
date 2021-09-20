class JobSerializer
    include FastJsonapi::ObjectSerializer
    belongs_to :employer
    has_many :applicants
    has_many :employees, through: :applicants
    attributes :id, :employer_id, :status, :title, :city, :state, :jobtype, :schedule, 
    :skills, :certificates, :description
end