# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Employee.create(email: 'steve.jobs@gmail.com', password: 'abc123')
Profile.create(employee_id: 1, fname: "Steve", lname: "Jobs")
Employer.create(email: 'dste@aol.com', password: 'abc123', name: 'Danny Boy Productions')
Job.create(title: "Painter", status: true, location: "08527", description: "Painting houses, rooms and everything in between.", employer_id: 1)
Job.create(title: "Electrician", status: true, location: "08755", description: "Painting houses, rooms and everything in between.", employer_id: 1)