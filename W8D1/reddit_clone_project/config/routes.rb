Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html\
  resources :users, except:[:destroy] do
    resources :posts, only: [:edit, :update]
  end
  resources :posts, except: [:index, :edit, :update]
  resource :session, only:[:create, :new, :destroy]
  resources :subs, except: [:destroy] do
    resources :posts, only: [:index]
  end
end
