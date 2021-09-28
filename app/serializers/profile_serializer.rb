class ProfileSerializer
    include JSONAPI::Serializer
    attributes :id, :fname, :lname, :city, :state, :zipcode, :license, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :maxpay, :industry, :description, :employee_id
end