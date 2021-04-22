Rails.application.routes.draw do
  get 'calculate/index'
  resources :calculator
  root "calculate#index"
end
