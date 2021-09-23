class EmployerSerializer
    include JSONAPI::Serializer
    attributes :id, :email, :name
end