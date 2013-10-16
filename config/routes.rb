ContactManager::Application.routes.draw do

  root "application#index"
  resources :contacts

end
