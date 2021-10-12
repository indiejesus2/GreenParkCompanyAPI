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
Profile.create(employee_id: 1, fname: "Steve", lname: "Jobs", city: "Jackson Township", state: "NJ", zipcode: "08527", license: true, jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays"], shifts: ["AM"], seasonstart: "Mar", seasonend: "Aug", minpay: 17, maxpay: 21, industry: "Electric")
Profile.create(employee_id: 2, fname: "Bill", lname: "Gates", city: "Howell", state: "NJ", zipcode: "07731", jobtype: ["Part Time", "Contract"], schedule: ["Weekdays"], industry: "Plumbing")
Profile.create(employee_id: 3, fname: "Vincent", lname: "Van Gogh", city: "Trumansburg", state: "NY", zipcode: "14886", jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays"], industry: "Painting")
Profile.create(employee_id: 4, fname: "Steve", lname: "Martin", city: "Toms River", state: "NJ", zipcode: "08753", license: false, jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays, Weekends"], shifts: ["PM"], seasonstart: "Jul", seasonend: "Dec", minpay: 19.00, maxpay: 25, industry: "Electric")
Experience.create(profile_id: 1, employee_id: 1, title: "Painter", company: "JB and Sons", city: "Freehold", state: "NJ", current: true)
Employer.create(email: 'dste@aol.com', password: 'abc123', name: 'Danny Boy Productions')
Job.create(title: "Painter", status: true, city: "Jackson Township", state: "NJ", zipcode: "08527", jobtype: ["Full Time"], schedule: ["Weekdays", "Weekends"], shifts: ["AM"], seasonstart: "Jan", seasonend: "Jun", minpay: 20.00, maxpay: 25.50, industry: "Painting", description: "Painting houses, rooms and everything in between.", employer_id: 1)
Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", license: true, jobtype: ["Part Time"], schedule: ["Weekdays, Weekends"], shifts: ["PM"], seasonstart: "Apr", seasonend: "Sept", minpay: 15.00, maxpay: 19.50, industry: "Electric", description: "Painting houses, rooms and everything in between.", employer_id: 1)
