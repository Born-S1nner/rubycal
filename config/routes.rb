Rails.application.routes.draw do
  resources :calculators
  root "calculator#index"
end
