# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Employee.create(email: 'steve.jobs@gmail.com', password: 'abc123')
Employee.create(email: 'bill.gates@hotmail.com', password: 'abc123')
Employee.create(email: 'vincent.van.gogh@yahoo.com', password: 'abc123')
Employee.create(email: 'steve.martin@aol.com', password: 'abc123')
Profile.create(employee_id: 1, fname: "Steve", lname: "Jobs", city: "Jackson", state: "NJ", zipcode: "08527", jobtype: ["FT", "PT", "Temporary"], schedule: ["MF"], skills: ["electric"])
Profile.create(employee_id: 2, fname: "Bill", lname: "Gates", city: "Howell", state: "NJ", zipcode: "07731", jobtype: ["PT", "Contract"], schedule: ["MF"], skills: ["plumbing"])
Profile.create(employee_id: 3, fname: "Vincent", lname: "Van Gogh", city: "Trumansburg", state: "NY", zipcode: "14886", jobtype: ["FT", "PT", "Temporary"], schedule: ["MF"], skills: ["painting"])
Profile.create(employee_id: 4, fname: "Steve", lname: "Martin", city: "Toms River", state: "NJ", zipcode: "08753", jobtype: ["FT", "PT", "Temporary"], schedule: ["MF"], skills: ["electric"])
WorkHistory.create(profile_id: 1, employee_id: 1, title: "Painter", company: "JB and Sons", city: "Freehold", state: "NJ", current: true)
Employer.create(email: 'dste@aol.com', password: 'abc123', name: 'Danny Boy Productions')
Job.create(title: "Painter", status: true, city: "Jackson", state: "NJ", zipcode: "08527", jobtype: ["FT"], schedule: ["MF", "Weekends"], skills: ["painting", "paint", "painter"], description: "Painting houses, rooms and everything in between.", employer_id: 1)
Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", skills: ["electric"], description: "Painting houses, rooms and everything in between.", employer_id: 1)
