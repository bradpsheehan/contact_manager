ContactManager::Application.routes.draw do

  root "contacts#index"
  resources :contacts

end
