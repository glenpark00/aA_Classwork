# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: 'john')
user2 = User.create!(username: 'Leonardo')
user3 = User.create!(username: 'arnold')
user4 = User.create!(username: 'jorge')
user5 = User.create!(username: 'pablo')
user6 = User.create!(username: 'andy')

aw1 = Artwork.create!(title:'Vitruvian Man', image_url:'https://upload.wikimedia.org/wikipedia/commons/2/22/Da_Vinci_Vitruve_Luc_Viatour.jpg', artist_id:2)
aw2 = Artwork.create!(title:'Campbells Soup', image_url:'https://upload.wikimedia.org/wikipedia/en/9/95/Warhol-Campbell_Soup-1-screenprint-1968.jpg', artist_id:6)

aw3 = Artwork.create!(title: 'Madonna', image_url: 'https://cdn.britannica.com/48/103248-050-DF3BE767/Madonna-and-Child-oil-painting-workshop-Giovanni.jpg', artist_id: 1)
aw4 = Artwork.create!(title: 'Is This Millenial Art', image_url: 'https://www.theartblog.org/wp-content/uploaded/2018/08/Artblog-Ask-Artblog-Skylar-Chui.jpg', artist_id: 5)

share1 = ArtworkShare.create!(artwork_id: 3, viewer_id: 3)
share2 = ArtworkShare.create!(artwork_id: 2, viewer_id: 2)
share3 = ArtworkShare.create!(artwork_id: 3, viewer_id: 4)
