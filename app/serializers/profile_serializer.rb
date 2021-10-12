class ProfileSerializer
    include JSONAPI::Serializer
    has_many :work_histories
    attributes :id, :fname, :lname, :city, :state, :zipcode, :license, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :maxpay, :industry, :description, :employee, :work_histories
end