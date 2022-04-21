class ProfileSerializer
    include JSONAPI::Serializer
    has_many :experiences
    has_one :document, through: :employees

    attribute :file do |object|
        customer = Customer.find(object.employee_id)
        rails_blob_url(customer.file, only_path: true) if customer.file.attached?
    end

    attributes :id, :fname, :lname, :city, :state, :zipcode, :phone, :license, :jobtype, :schedule, :shifts, :seasonstart, :seasonend, :minpay, :paytype, :trade, :description, :employee, :experiences, :document
end