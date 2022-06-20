Rails.configuration.stripe = {
    secret_key: Rails.application.credentials.stripe[:development][:secret_key],
    publishable_key: Rails.application.credentials.stripe[:development][:publishable_key]
}

# config.stripe.secret_key = Rails.application.credentials.stripe[:development][:secret_key]
#   config.stripe.publishable_key = Rails.application.credentials.stripe[:development][:publishable_key]

Stripe.api_key = Rails.configuration.stripe[:secret_key]