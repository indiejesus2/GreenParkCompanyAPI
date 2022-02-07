Rails.application.config.middleware.insert_before 0, Rack::Cors do
    allow do
      origins 'localhost:3000', 'blucollar-jobs.herokuapp.com'
      resource '*', headers: :any, methods: [:get, :post, :patch, :put, :delete, :options], credentials: true
    end
  end