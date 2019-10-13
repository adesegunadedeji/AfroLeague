Rails.application.routes.draw do

  root to: 'home#index', as: '/home'

  resources :users
  resources :leagues

  resources :sessions, only: [:new, :create, :destroy]
  get 'signup', to: 'users#new', as: 'signup'
  post 'login', to: 'sessions#create', as: 'l'
  get 'login', to: 'sessions#new', as: 'login'
  delete 'logout', to: 'sessions#destroy', as: 'logout'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
