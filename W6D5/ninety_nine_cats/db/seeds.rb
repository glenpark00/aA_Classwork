# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Cat.destroy_all

cat1 = Cat.create!(name: 'Sigmund', birth_date: Date.parse('01-07-2019'), color: 'Grey', sex: 'M', description: "He's a kitty!")
cat2 = Cat.create!(name: 'Matilda', birth_date: Date.parse('20-06-2018'), color: 'Black', sex: 'F', description: "She's a cat!")
cat3 = Cat.create!(name: "Luther", birth_date: Date.parse('04-07-2018'), color: 'Orange', sex: "M", description: "Don't touch his tail!")
cat4 = Cat.create!(name: 'Jynx', birth_date: Date.parse('05-02-1990'), color: 'Black', sex: 'F', description: 'She has got an attitude')
cat5 = Cat.create!(name: 'Jasper' , birth_date: Date.parse('02-02-2010'), color: 'White', sex: 'M', description: 'he is a fun cat')