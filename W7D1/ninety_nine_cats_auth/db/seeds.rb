# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cat.destroy_all

user1 = User.new(username: 'glen', password: 'password')
user2 = User.new(username: 'javier', password: 'password')
user3 = User.new(username: 'john', password: 'password')
user4 = User.new(username: 'crazycatlady12', password: 'password')

cat1 = Cat.create!(name: 'Sigmund', birth_date: Date.parse('01-07-2019'), color: 'black', sex: 'M', description: "He's a kitty!", user_id: user1.id)
cat2 = Cat.create!(name: 'Matilda', birth_date: Date.parse('20-06-2018'), color: 'black', sex: 'F', description: "She's a cat!", user_id: user1.id)
cat3 = Cat.create!(name: "Luther", birth_date: Date.parse('04-07-2018'), color: 'orange', sex: "M", description: "Don't touch his tail!", user_id: user2.id)
cat4 = Cat.create!(name: 'Jynx', birth_date: Date.parse('05-02-1990'), color: 'black', sex: 'F', description: 'She has got an attitude', user_id: user2.id)
cat5 = Cat.create!(name: 'Jasper' , birth_date: Date.parse('02-02-2010'), color: 'white', sex: 'M', description: 'he is a fun cat', user_id: user3.id)