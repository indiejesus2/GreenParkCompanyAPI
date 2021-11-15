Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :employees do
        resources :profiles do
          resources :work_histories
        end
        resources :jobs
      end
      resources :employers do
        resources :jobs do 
          resources :employees
        end
      end
      resources :jobs
      resources :documents
      post '/signin', to: 'auth#create'
      post '/signup', to: 'employees#create'
      post '/contractors/signup', to: 'employers#create'
      get '/current_user', to: 'auth#is_logged_in?'
      get '/findcity(/:zipcode)', to: 'auth#find_city'
    end
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html