Rails.application.routes.draw do

  root to: 'home#index', as: '/home'

  resources :users
  resources :leagues
  get 'logged_in', to: 'sessions#logged_in'
  delete 'logout', to: 'sessions#destroy'
  resources :sessions
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
