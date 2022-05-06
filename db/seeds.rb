# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Employee.create(email: 'steve.jobs@gmail.com', password: 'abc123')
# Employee.create(email: 'bill.gates@hotmail.com', password: 'abc123')
# Employee.create(email: 'vincent.van.gogh@yahoo.com', password: 'abc123')
# Employee.create(email: 'steve.martin@aol.com', password: 'abc123')
# Profile.create(employee_id: 1, fname: "Steve", lname: "Jobs", city: "Jackson Township", state: "NJ", zipcode: "08527", license: true, jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays"], shifts: ["AM"], seasonstart: "Mar", seasonend: "Aug", minpay: 17, trade: "Electric")
# Profile.create(employee_id: 2, fname: "Bill", lname: "Gates", city: "Howell", state: "NJ", zipcode: "07731", jobtype: ["Part Time", "Contract"], schedule: ["Weekdays"], seasonstart: "Mar", seasonend: "Aug", minpay: 17, trade: "Plumbing")
# Profile.create(employee_id: 3, fname: "Vincent", lname: "Van Gogh", city: "Trenton", state: "NJ", jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays"], seasonstart: "Mar", seasonend: "Aug", minpay: 17, trade: "Painting")
# Profile.create(employee_id: 4, fname: "Steve", lname: "Martin", city: "Toms River", state: "NJ", zipcode: "08753", license: false, jobtype: ["Full Time", "Part Time", "Temporary"], schedule: ["Weekdays, Weekends"], shifts: ["PM"], seasonstart: "Jul", seasonend: "Dec", minpay: 19.00, trade: "Electric")
# Experience.create(employee_id: 1, title: "Painter", company: "JB and Sons", city: "Toms River", state: "New Jersey", zipcode: "08755", startdate: "07/01/2016", enddate: "12/01/2021", current: true)
# Employer.create(email: 'dste@aol.com', password: 'abc123', name: 'Danny Boy Productions', monthly: true, yearly: false, status: true)
# Job.create(title: "Painter", status: true, city: "Jackson Township", state: "NJ", zipcode: "08527", jobtype: ["Full Time"], schedule: ["Weekdays", "Weekends"], shifts: ["AM"], seasonstart: "Jan", seasonend: "Jun", minpay: 20.00, paytype: "Hourly", trade: "Painting", description: "Painting houses, rooms and everything in between.", employer_id: 1)
# Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", license: true, jobtype: ["Part Time"], schedule: ["Weekdays", "Weekends"], shifts: ["PM"], seasonstart: "Apr", seasonend: "Sept", minpay: 15.00, paytype: "Hourly", trade: "Electric", description: "Painting houses, rooms and everything in between.", employer_id: 1)
# Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", license: true, jobtype: ["Part Time"], schedule: ["Weekdays", "Weekends"], shifts: ["PM"], seasonstart: "Apr", seasonend: "Sept", minpay: 15.00, paytype: "Hourly", trade: "Electric", description: "Painting houses, rooms and everything in between.", employer_id: 1)
# Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", license: true, jobtype: ["Part Time"], schedule: ["Weekdays", "Weekends"], shifts: ["PM"], seasonstart: "Apr", seasonend: "Sept", minpay: 15.00, paytype: "Hourly", trade: "Electric", description: "Painting houses, rooms and everything in between.", employer_id: 1)
# Job.create(title: "Electrician", status: true, city: "Howell", state: "NJ", zipcode: "08753", license: true, jobtype: ["Part Time"], schedule: ["Weekdays", "Weekends"], shifts: ["PM"], seasonstart: "Apr", seasonend: "Sept", minpay: 15.00, paytype: "Hourly", trade: "Electric", description: "Painting houses, rooms and everything in between.", employer_id: 1)

# BluCollar
  Employee.create(email: "pl@paulleo.com", password: "abc123", id: "58029546-479f-46af-b1d0-40d566e1b365")
  Employee.create(email: "jp@jonpotzer.com", password: "abc123", id: "34b050c5-4e3b-45ee-a09b-1919033570ca")
  Employee.create(email: "ib@irabrickman.com", password: "abc123", id: "ec52a9d9-4c1a-4f20-a5be-ce3316d4222c")
  Employee.create(email: "cb@chuckbowne.com", password: "abc123", id: "65f54cf8-6674-4222-b739-046ebe1f2b41")
  Employee.create(email: "td@tomdonaway.com", password: "abc123", id: "d5e5f79f-a558-497b-96ce-e0fbe6f37d2c")
  Employee.create(email: "rp@russpace.com", password: "abc123", id: "f0c283e0-7426-4b98-a707-507980c03e1e")
  Employee.create(email: "am@alanmanowitz.com", password: "abc123", id: "c62f76ae-23ff-4f0b-a61a-579a1bd457f9")
  Employee.create(email: "TL@tomlynar.com", password: "abc123", id: "6ae519eb-d451-46f9-aca9-fd101809547d")
  Employee.create(email: "re@russevans.com", password: "abc123", id: "3bf6a6ed-9eca-4133-8ab6-f8f6210f09a6")
  Employee.create(email: "wp@wayneparisi.com", password: "abc123", id: "5fccccfa-b537-415f-82c7-a205898d8b2a")
  Employee.create(email: "TT@tonytesta.com", password: "abc123", id: "3156fd8c-380a-48e5-b071-cbe27e2722f2")
  Employee.create(email: "dp@daveprice.com", password: "abc123", id: "a259a8b8-96a2-4ca6-b93d-042550ec84cd")
  Employee.create(email: "rf@robferraro.com", password: "abc123", id: "edb4e6c2-6be0-4de6-8e37-d9111790b20d")
  Employee.create(email: "ol@olivialeo.com", password: "abc123", id: "a22d5bde-4e29-4ecb-a45d-070dd4c796ac")
  Employee.create(email: "al@alexoleo.com", password: "abc123", id: "d6dc8c51-c762-486c-a9fc-67ed2e0dac3b")
  Employee.create(email: "joe.bruns@gmail.com", password: "abc123", id: "aaa0da7b-6701-45a2-933e-4ab3baca775a")
  Employee.create(email: "cj@chrisjouan.com", password: "abc123", id: "af802683-4f3a-4a02-ae91-b77557e25afe")
  Employee.create(email: "jon@potzer.com", password: "abc123", id: "b6bbcc26-77f0-450b-8244-a7e68624f7d3")
  Employee.create(email: "nm@nickmangold.com", password: "abc123", id: "5a590f64-4f53-4ab3-89bc-9eb32348ff9d")
  Employee.create(email: "hello@gmail.com",  password: "abc123", id: "c19f1e35-3673-4984-aacf-a0c68ea2628f")

  Employer.create(name: "Elmer Painting", email: "ep@elmerpainting.com",  password: "abc123", monthly: true, yearly: false, status: true, id: "b65a2c63-46ef-4ab0-a6dc-4ae5f89ad002")
  Employer.create(name: "Green Park Company", email: "gp@greenpark.com",  password: "abc123", monthly: true, yearly: false, status: true, id: "36bbe522-8bb0-479a-9961-e2f1feb385e1")
  Employer.create(name: "Hickory Tree Landscaping", email: "ht@hickorytree.com",  password: "abc123", monthly: true, yearly: false, status: true, id: "65ab5ce3-b209-4789-9ab7-d6a0f53fcbfb")
  Employer.create(name: "North Pole Insulation", email: "np@northpole.com",  password: "abc123", monthly: false, yearly: true, status: true, id: "51bb9509-ff1f-4ceb-b88f-cc26ad04c825")
  Employer.create(name: "Star Max Framing", email: "st@starmax.com",  password: "abc123", monthly: true, yearly: false, status: true, id: "a2ae3409-802a-47b5-8970-3a1241ef7559")
  Employer.create(name: "Clear Choice Floors", email: "cc@clearchoice.com", password: "abc123", monthly: true, yearly: false, status: true, id: "8235eb78-4877-4b46-a42e-5ba8c58b3473")
  Employer.create(name: "Oscar", email: "joe.bruns@gmail.com", password: "abc123", monthly: true, yearly: false, status: true, id: "91a2312c-33cd-47a7-a23c-2604800b9fc3")

  Profile.create(
      fname: "Jon",
      lname: "Potzer",
      city: "Howell Township",
      state: "New Jersey",
      zipcode: "07731",
      license: true,
      longitude: -74.20430849583127,
      latitude: 40.1797105,
      phone: "(908) 422-4053",
      jobtype: ["Full Time"],
      schedule: ["Weekdays", "Weekends"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 20.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "34b050c5-4e3b-45ee-a09b-1919033570ca",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Ira",
      lname: "Brickman",
      city: "Roselle Park",
      state: "New Jersey",
      zipcode: "07204",
      license: false,
      longitude: -74.2632022,
      latitude: 40.6642692,
      phone: "(908) 241-2513",
      jobtype: ["Full Time", "Part Time"],
      schedule: ["Weekdays", "Weekends", "Holidays"],
      shifts: ["AM", "PM", "Evening"],
      seasonstart: "",
      seasonend: "",
      minpay: 15.0,
      commute: 25,
      trade: "Maintenance",
      description: nil,
      employee_id: "ec52a9d9-4c1a-4f20-a5be-ce3316d4222c",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Chuck",
      lname: "Bowne",
      city: "Roselle",
      state: "New Jersey",
      zipcode: "07203",
      license: true,
      longitude: -74.26088332752404,
      latitude: 40.650392499999995,
      phone: "(732) 272-7177",
      jobtype: ["Part Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 18.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "65f54cf8-6674-4222-b739-046ebe1f2b41",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Tom",
      lname: "Donaway",
      city: "Holmdel Township",
      state: "New Jersey",
      zipcode: "07733",
      license: true,
      longitude: -74.17592969449562,
      latitude: 40.375658,
      phone: "(908) 337-7226",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 25.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "d5e5f79f-a558-497b-96ce-e0fbe6f37d2c",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Russ",
      lname: "Pace",
      city: "Kinnelon",
      state: "New Jersey",
      zipcode: "07405",
      license: true,
      longitude: -74.367096,
      latitude: 41.0017644,
      phone: "(763) 202-9193",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM"],
      seasonstart: "",
      seasonend: "",
      minpay: 20.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "f0c283e0-7426-4b98-a707-507980c03e1e",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Alan",
      lname: "Manowitz",
      city: "Roselle Park",
      state: "New Jersey",
      zipcode: "07204",
      license: true,
      longitude: -74.2632022,
      latitude: 40.6642692,
      phone: "(201) 456-1411",
      jobtype: ["Full Time", "Part Time"],
      schedule: ["Weekdays", "Weekends", "Overnight", "Holidays"],
      shifts: ["AM", "PM", "Evening"],
      seasonstart: "",
      seasonend: "",
      minpay: 28.0,
      commute: 50,
      trade: "Other/None",
      description: nil,
      employee_id: "c62f76ae-23ff-4f0b-a61a-579a1bd457f9",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Tom",
      lname: "Lynar",
      city: "Easton",
      state: "Pennsylvania",
      zipcode: "18042",
      license: true,
      longitude: -75.2099866,
      latitude: 40.6916081,
      phone: "(973) 960-9735",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 35.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "6ae519eb-d451-46f9-aca9-fd101809547d",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Russ",
      lname: "Evans",
      city: "Springfield",
      state: "New Jersey",
      zipcode: "07081",
      license: true,
      longitude: -74.30569336998289,
      latitude: 40.70972275,
      phone: "(201) 400-3278",
      jobtype: ["Full Time"],
      schedule: ["Weekends", "Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 50.0,
      commute: 15,
      trade: "Other/None",
      description: nil,
      paytype: "Hourly",
      employee_id: "3bf6a6ed-9eca-4133-8ab6-f8f6210f09a6"
  )
 
 
  Profile.create(
      fname: "Wayne",
      lname: "Parisi",
      city: "Toms River",
      state: "New Jersey",
      zipcode: "08753",
      license: true,
      longitude: -74.1979576,
      latitude: 39.9537359,
      phone: "(973) 715-8371",
      jobtype: ["Full Time"],
      schedule: ["Weekdays", "Weekends", "Overnight"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 30.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "5fccccfa-b537-415f-82c7-a205898d8b2a",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Tony",
      lname: "Testa",
      city: "Point Pleasant",
      state: "New Jersey",
      zipcode: "08742",
      license: true,
      longitude: -74.0681931,
      latitude: 40.0831714,
      phone: "(732) 272-6500",
      jobtype: ["Full Time"],
      schedule: ["Weekdays", "Weekends"],
      shifts: ["AM"],
      seasonstart: "",
      seasonend: "",
      minpay: 20.0,
      commute: 25,
      trade: "Maintenance",
      description: nil,
      employee_id: "3156fd8c-380a-48e5-b071-cbe27e2722f2",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Rob",
      lname: "Ferraro",
      city: "Union",
      state: "New Jersey",
      zipcode: "07083",
      license: true,
      longitude: -74.30569336998289,
      latitude: 40.70972275,
      phone: "(908) 687-2867",
      jobtype: ["Part Time"],
      schedule: ["Weekdays"],
      shifts: ["AM"],
      seasonstart: "",
      seasonend: "",
      minpay: 20.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "edb4e6c2-6be0-4de6-8e37-d9111790b20d",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Dave",
      lname: "Price",
      city: "Avon-by-the-Sea",
      state: "New Jersey",
      zipcode: "07717",
      license: true,
      longitude: -74.0159703,
      latitude: 40.1923357,
      phone: "(973) 632-1022",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 50.0,
      commute: 25,
      trade: "Landscape",
      description: nil,
      employee_id: "a259a8b8-96a2-4ca6-b93d-042550ec84cd",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Olivia",
      lname: "Leo",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: false,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "(908) 868-2977",
      jobtype: ["Part Time"],
      schedule: ["Weekdays", "Weekends"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 22.0,
      commute: 10,
      trade: "Other/None",
      description: nil,
      employee_id: "a22d5bde-4e29-4ecb-a45d-070dd4c796ac",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Jonathan",
      lname: "Potzer",
      city: "Howell Township",
      state: "New Jersey",
      zipcode: "07731",
      license: true,
      longitude: -74.20430849583127,
      latitude: 40.1797105,
      phone: "(908) 422-4053",
      jobtype: ["Full Time"],
      schedule: ["Weekdays", "Weekends"],
      shifts: ["PM", "AM"],
      seasonstart: "",
      seasonend: "Dec",
      minpay: 20.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "b6bbcc26-77f0-450b-8244-a7e68624f7d3",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Alexa",
      lname: "Leo",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: false,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "(908) 868-9649",
      jobtype: ["Part Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 15.0,
      commute: 15,
      trade: "Painting",
      description: nil,
      employee_id: "d6dc8c51-c762-486c-a9fc-67ed2e0dac3b",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Joe",
      lname: "Bruns",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: true,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "8629267850",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM"],
      seasonstart: "",
      seasonend: "",
      minpay: 12.0,
      commute: 25,
      trade: "Plumbing",
      description: nil,
      employee_id: "aaa0da7b-6701-45a2-933e-4ab3baca775a",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Chris",
      lname: "Jouan",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: false,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "(973) 722-8583",
      jobtype: ["Part Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 20.0,
      commute: 5,
      trade: "Other/None",
      description: nil,
      employee_id: "af802683-4f3a-4a02-ae91-b77557e25afe",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Nick",
      lname: "Mangold",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: true,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "(937) 681-6148",
      jobtype: ["Full Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "",
      minpay: 0.0,
      commute: 25,
      trade: "Other/None",
      description: nil,
      employee_id: "5a590f64-4f53-4ab3-89bc-9eb32348ff9d",
      paytype: "Hourly",
  )
 
 
  Profile.create(
      fname: "Paul ",
      lname: "Leo",
      city: "Madison",
      state: "New Jersey",
      zipcode: "07940",
      license: true,
      longitude: -74.417097,
      latitude: 40.7598227,
      phone: "(908) 482-1951",
      jobtype: ["Full Time", "Part Time"],
      schedule: ["Weekdays"],
      shifts: ["AM", "PM"],
      seasonstart: "",
      seasonend: "Dec",
      minpay: 25.0,
      commute: 15,
      trade: "Landscape",
      description: nil,
      paytype: "Hourly",
      employee_id: "58029546-479f-46af-b1d0-40d566e1b365"
  )
 
 Profile.create(
     fname: "hello",
     lname: "smith",
     city: "Madison",
     state: "New Jersey",
     zipcode: "07940",
     license: false,
     longitude: -74.417097,
     latitude: 40.7598227,
     phone: "",
     jobtype: ["Part Time"],
     schedule: ["Weekends"],
     shifts: ["AM"],
     seasonstart: "",
     seasonend: "",
     minpay: 20.0,
     commute: 25,
     trade: "Electric",
     description: nil,
     employee_id: "c19f1e35-3673-4984-aacf-a0c68ea2628f",
     paytype: "Hourly"
 )

 
 Job.create(
     title: "Painter",
     city: "Elizabeth",
     state: "New Jersey",
     zipcode: "07206",
     longitude: -74.2107006,
     latitude: 40.6639916,
     jobtype: ["Full Time"],
     schedule: ["Weekdays"],
     shifts: ["AM", "PM"],
     seasonstart: "--",
     seasonend: "",
     minpay: 15.0,
     paytype: "Hourly",
     trade: "Painting",
     license: false,
     description: "",
     employer_id: "b65a2c63-46ef-4ab0-a6dc-4ae5f89ad002",
 )
 Job.create(
     title: "Irrigation",
     city: "Roselle Park",
     state: "New Jersey",
     zipcode: "07204",
     longitude: -74.2632022,
     latitude: 40.6642692,
     jobtype: ["Full Time", "Part Time"],
     schedule: ["Weekdays", "Weekends"],
     shifts: ["AM", "PM"],
     seasonstart: "Apr",
     seasonend: "Dec",
     minpay: 18.0,
     paytype: "Hourly",
     trade: "Other/None",
     license: false,
     description: "",
     employer_id: "36bbe522-8bb0-479a-9961-e2f1feb385e1",
 )
 Job.create(
     title: "Landscaper",
     city: "Chatham Township",
     state: "New Jersey",
     zipcode: "07928",
     longitude: -74.42511146417618,
     latitude: 40.73012395,
     jobtype: ["Full Time", "Part Time"],
     schedule: ["Weekdays", "Weekends"],
     shifts: ["AM", "PM"],
     seasonstart: "Mar",
     seasonend: "Dec",
     minpay: 16.0,
     paytype: "Hourly",
     trade: "Landscape",
     license: true,
     description: "",
     employer_id: "65ab5ce3-b209-4789-9ab7-d6a0f53fcbfb",
 )
 Job.create(
     title: "Insulator",
     city: "Readington Township",
     state: "New Jersey",
     zipcode: "08889",
     longitude: -74.7376619,
     latitude: 40.5687141,
     jobtype: ["Full Time", "Part Time"],
     schedule: ["Weekdays", "Weekends"],
     shifts: ["AM", "PM", "Evening"],
     seasonstart: "",
     seasonend: "",
     minpay: 20.0,
     paytype: "Hourly",
     trade: "Other/None",
     license: true,
     description: "",
     employer_id: "51bb9509-ff1f-4ceb-b88f-cc26ad04c825",
 )
 Job.create(
     title: "Framer",
     city: "Fanwood",
     state: "New Jersey",
     zipcode: "07076",
     longitude: -74.3836416,
     latitude: 40.6409041,
     jobtype: ["Full Time"],
     schedule: ["Weekdays", "Weekends"],
     shifts: ["AM", "PM"],
     seasonstart: "",
     seasonend: "",
     minpay: 18.0,
     paytype: "Hourly",
     trade: "Other/None",
     license: true,
     description: "",
     employer_id: "a2ae3409-802a-47b5-8970-3a1241ef7559",
 )
 Job.create(
     title: "Wood Floor Installer/Finisher",
     city: "Long Branch",
     state: "New Jersey",
     zipcode: "07740",
     longitude: -73.9923596,
     latitude: 40.3042778,
     jobtype: ["Full Time", "Part Time"],
     schedule: ["Weekdays", "Weekends"],
     shifts: ["AM", "PM"],
     seasonstart: "Jan",
     seasonend: "Dec",
     minpay: 25.0,
     paytype: "Hourly",
     trade: "Other/None",
     license: true,
     description: "Install and finish wood floors throughout NJ  Long hours but good pay!",        
     employer_id: "8235eb78-4877-4b46-a42e-5ba8c58b3473",
 )
 Job.create(
     title: "Ceo",
     city: "Madison",
     state: "New Jersey",
     zipcode: "07940",
     longitude: -74.417097,
     latitude: 40.7598227,
     jobtype: ["Full Time"],
     schedule: ["Weekdays"],
     shifts: ["AM"],
     seasonstart: "Jan",
     seasonend: "Jan",
     minpay: 10.0,
     paytype: "Hourly",
     trade: "Plumbing",
     license: true,
     description: "",
     employer_id: "91a2312c-33cd-47a7-a23c-2604800b9fc3",
 )
 Job.create(
     title: "Electrical",
     city: "Madison",
     state: "New Jersey",
     zipcode: "07940",
     longitude: -74.417097,
     latitude: 40.7598227,
     jobtype: ["Part Time"],
     schedule: ["Weekdays"],
     shifts: ["AM"],
     seasonstart: "Jan",
     seasonend: "Jan",
     minpay: 0.0,
     paytype: "Hourly",
     trade: "Electric",
     license: true,
     description: "",
     employer_id: "91a2312c-33cd-47a7-a23c-2604800b9fc3",
 )