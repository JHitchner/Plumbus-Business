require "sinatra"

get "/" do
  erb :home
end
get "/contact" do
  erb :contact
end
get "/how" do
  erb :how
end
get "/testimonials" do
  erb :testimonials
end
