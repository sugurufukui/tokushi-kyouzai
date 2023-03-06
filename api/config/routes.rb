Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :materials do
        resource :likes, only: %i[show create destroy]
      end

      # 自分が投稿した教材
      get "/my_materials", to: "materials#my_materials", as:
      :my_materials

      # 自分がいいねした教材
      get "/my_like", to: "materials#my_like_materials", as: :my_like_materials

      mount_devise_token_auth_for 'User', at: 'auth', controllers: {
        registrations: 'api/v1/auth/registrations'
      }

      # namespace :auth do
      #   resources :sessions, only: %i[index]
      # end

      devise_scope :api_v1_user do
        post 'auth/guest_sign_in', to: 'auth/sessions#guest_sign_in'
        get 'auth/sessions', to: 'auth/sessions#index'
      end

      # # ゲストログイン機能
      # devise_scope :v1_user do
      #   post "api/v1/auth/guest_sign_in", to: "api/v1/auth/sessions#guest_sign_in/"
      # end
    end
  end
end
