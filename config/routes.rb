Rails.application.routes.draw do
  root to: "static_pages#root"
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :books, only: [:create, :destroy, :show, :index, :update] do
      member do
        patch :status
      end
    end
    resources :shelf_assignments, only: [:create]
    resource :shelf_assignment do
      member do
        delete :remove
      end
    end
    resources :shelves, only: [:show, :create, :index, :destroy, :update]
  end
  get 'auth/:provider/callback', to: 'api/sessions#omni_create'
end
