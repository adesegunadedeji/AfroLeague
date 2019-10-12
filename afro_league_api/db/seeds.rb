# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
100.times do
    League.create(
      player: Faker::Sports::Basketball.player,
      position: Faker::Sports::Basketball.position,
      team: Faker::Sports::Basketball.team,
      coach: Faker::Sports::Basketball.coach
    )
  end
  
  puts "Seeded database"