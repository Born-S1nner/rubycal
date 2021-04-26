Rails.application.routes.draw do
  resources :calculations, only: :create

  root 'calculator#index'
end
