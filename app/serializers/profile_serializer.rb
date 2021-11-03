class ProfileSerializer
    include JSONAPI::Serializer
    has_many :experiences
    attributes :id, :fname, :lname, :city, :state, :zipcode, :license, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :maxpay, :industry, :description, :employee, :experiences
end