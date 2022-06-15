class SubscriptionSerializer
    include JSONAPI::Serializer
    belongs_to :employer
    # has_many :employees, through: :applicants
    # byebug
    attributes :active
end