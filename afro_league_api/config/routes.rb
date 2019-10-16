Rails.application.routes.draw do

  root to: 'home#index', as: '/home'

  resources :sessions, only: [:new, :create, :destroy]
  resources :users
  resources :leagues

  post 'login', to: 'sessions#create', as: 'login'
  get 'logged_in', to: 'sessions#logged_in'
  delete 'logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
