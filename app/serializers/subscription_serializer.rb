class SubscriptionSerializer
    include JSONAPI::Serializer
    belongs_to :employer
    # has_many :employees, through: :applicants
    # byebug
    attributes :id, :active, :next_billing, :plan_id, :stripe_id, :cancel_at, :stripe_active
end