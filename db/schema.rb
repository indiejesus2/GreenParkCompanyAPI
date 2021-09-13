# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_09_11_004852) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "employees", force: :cascade do |t|
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_employees_on_email", unique: true
  end

  create_table "employers", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.integer "zipcode"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_employers_on_email", unique: true
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.boolean "status", default: false
    t.string "city"
    t.string "state"
    t.float "longitude"
    t.float "latitude"
    t.text "jobType", default: [], array: true
    t.text "schedule", default: [], array: true
    t.text "skills", default: [], array: true
    t.text "certficates", default: [], array: true
    t.text "description"
    t.bigint "employer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employer_id"], name: "index_jobs_on_employer_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "city"
    t.string "state"
    t.float "longitude"
    t.float "latitude"
    t.integer "phone"
    t.string "status"
    t.text "jobType", default: [], array: true
    t.text "schedule", default: [], array: true
    t.string "education"
    t.hstore "history"
    t.text "skills", default: [], array: true
    t.boolean "military", default: false
    t.text "certficates", default: [], array: true
    t.text "description"
    t.bigint "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_profiles_on_employee_id"
  end

  add_foreign_key "jobs", "employers"
  add_foreign_key "profiles", "employees"
end
