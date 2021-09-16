class ProfileSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :fname, :lname, :city, :state, :phone, :status, :jobtype, :schedule, :education, :skills, :military, :certficates, :description, :employee_id
end