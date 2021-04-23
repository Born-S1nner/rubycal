Rails.application.routes.draw do
  resources :calculations
  get '/', to: "calculate#index"
end
