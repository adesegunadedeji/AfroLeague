Rails.application.routes.draw do

  root to: 'home#index', as: '/home'

  resources :users
  resources :leagues

  resources :sessions, only: [:create]
  get 'signup', to: 'users#new', as: 'signup'
  post 'login', to: 'sessions#create'
  get 'logged_in', to: 'sessions#logged_in'
  delete 'logout', to: 'sessions#destroy'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
