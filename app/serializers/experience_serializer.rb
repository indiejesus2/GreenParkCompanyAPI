class ExperienceSerializer
    include JSONAPI::Serializer
    attributes :id, :title, :company, :city, :state, :phone, :startdate, :enddate, :description, :current, :employee_id
end