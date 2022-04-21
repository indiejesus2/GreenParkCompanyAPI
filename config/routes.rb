Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :employees do
        resources :profiles do
        end
        resources :experiences
        resources :jobs
      end
      resources :employers do
        resources :jobs do 
          resources :employees
        end
      end
      resources :jobs
      resources :documents
      resources :applicants
      post '/signin', to: 'auth#create'
      post '/signup', to: 'employees#create'
      post '/contractors/signup', to: 'employers#create'
      get '/current_user', to: 'auth#is_logged_in?'
      get '/findcity(/:zipcode)', to: 'auth#find_city'
      post '/forgot_password', to: 'auth#forgot_password'
      post '/reset_password', to: 'auth#reset_password'
      get '/employees/(/:id)/applicants/(:job_id)', to: 'employees#apply'
      get '/employees/(/:id)/jobs/(:job_id)/save', to: 'employees#saveJob'
      delete '/signout', to: 'auth#destroy'
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html