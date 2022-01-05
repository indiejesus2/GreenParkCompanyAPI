class ProfileSerializer
    include JSONAPI::Serializer
    has_many :experiences
    attributes :id, :fname, :lname, :city, :state, :zipcode, :phone, :license, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :paytype, :trade, :description, :employee, :experiences
end