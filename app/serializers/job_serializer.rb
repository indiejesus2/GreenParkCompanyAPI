class JobSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :employer_id, :status, :title, :city, :state, :jobtype, :schedule, 
    :skills, :certificates, :description
end