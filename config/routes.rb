Rails.application.routes.draw do
  root 'homepage#index'
  namespace :api do
    namespace :v1 do
      resources :employees do
        resources :profiles
      end
      resources :employers
      resources :jobs
      post '/signin', to: 'auth#create'
      post '/signup', to: 'employees#create'
      post '/contractors/signup', to: 'employers#create'
    end
  end
end

# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html