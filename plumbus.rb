require "sinatra"

get "/" do
  erb :home
  "This is working"
end
# folder that this will be found in has to be - views
get "/contact" do
  erb :contact
end
get "/how" do
  erb :how
end
get "/testimonials" do
  erb :testimonials
end
