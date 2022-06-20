require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

Dotenv::Railtie.load

API_MYAPIKEY = ENV['API_MYAPIKEY']
DOMAIN_NAME = ENV['DOMAIN_NAME']
# AWS_ACCESS_KEY_ID = ENV['AWS_ACCESS_KEY_ID']
# AWS_SECRET_ACCESS_KEY = ENV['AWS_SECRET_ACCESS_KEY']

module GreenParkCompany
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0
    config.middleware.use ActionDispatch::Cookies
    config.middleware.use ActionDispatch::Session::CookieStore

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
  end
end
