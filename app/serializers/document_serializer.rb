class DocumentSerializer
    include JSONAPI::Serializer
    # has_many :jobs
    # has_many :applicants, through: :jobs
    # has_many :employees, through: :applicants
    # byebug
    attributes :filename, :contenttype
end