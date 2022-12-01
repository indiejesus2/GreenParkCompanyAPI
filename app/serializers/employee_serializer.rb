class EmployeeSerializer
    include JSONAPI::Serializer
    singleton_class.include Rails.application.routes.url_helpers
    # :name 
    has_one :profile
    has_one :document
    has_many :experiences
    has_many :applicants
    has_many :jobs, through: :applicants

    attribute :file do |object|
        rails_blob_url(object.file, only_path: true) if object.file.attached?
    end

    # attribute :document do |object|
    #     object.file.content_type if object.file.attached?
    # end

    attributes :id, :email, :profile, :applicants, :experiences, :jobs, :created_at, :updated_at
    # def file
    #     if object.file.attached?
    #         {
    #             url: rails_blob_url(object.file)
    #         }
    #     end
    #     # rails_blob_path(object.file, only_path: true) if object.file.attached?
    # end
    
end 