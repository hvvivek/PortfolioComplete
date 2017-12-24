Rails.application.routes.draw do
  resources :taggings
  # resources :tags
  resources :media
  resources :collaborators
  resources :instructors
  resources :projects

  root 'projects#index'
  get 'tags/:tag', to: 'projects#index', as: :tag

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
