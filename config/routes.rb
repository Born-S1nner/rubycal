Rails.application.routes.draw do
  resources :calculator
  get '/', to: "calculate#index"
end
