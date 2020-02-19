Rails.application.routes.draw do
  root to: 'home#top'
  get "/meow" => "home#meow"
  get "/products" => "home#products"
  get "/journal" => "home#journal"
  get "/company" => "home#company"
  get "/contact" => "home#contact"
  get "/privacy_policy" => "home#privacy_policy"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
