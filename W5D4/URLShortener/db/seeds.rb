# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  User.destroy_all
  user1 = User.create!(email: 'CJ')
  user2 = User.create!(email: 'Flarnie')
  user3 = User.create!(email: 'Jeff')
  user4 = User.create!(email: 'Georges St. Pierre')
  user5 = User.create!(email: 'Ned')

  ShortenedUrl.destroy_all
  ShortenedUrl.shortened_url(user3, 'facebook.com/dsajgfsfakjglhjkshglk1000000')
  ShortenedUrl.shortened_url(user4, 'facebook.com/dsajgfsfakjglhjkshglk2000000')
  ShortenedUrl.shortened_url(user1, 'facebook.com/dsajgfsfakjglhjkshglk3000000')
  ShortenedUrl.shortened_url(user2, 'facebook.com/dsajgfsfakjglhjkshglk4000000')
end
