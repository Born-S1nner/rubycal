Rails.application.routes.draw do
  get 'calculator/index'
  resources :calculations, only: :create

  root 'calculator#index'
end
