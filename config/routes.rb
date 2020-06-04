Rails.application.routes.draw do
  resources :categories
  root 'restaurants#index'
  
  devise_for :users
  
  resources :restaurants do
    collection do 
      get :import
      post :import
    end
    resources :locations
  end
  
  resources :tickets do
    collection do
      get :thank_you
    end
  end

  get '/admin_menu' => 'pages#admin_menu'
  
  namespace :api do
    namespace :v1 do
      resources :restaurants, only: [:index]
    end
  end
end
