Rails.application.routes.draw do
  resources :calculations

  root 'calculations#index'
end
