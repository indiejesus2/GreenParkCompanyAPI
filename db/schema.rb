# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_27_170528) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "applicants", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.bigint "employer_id", null: false
    t.bigint "job_id", null: false
    t.integer "rating", default: 0
    t.float "distance"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_applicants_on_employee_id"
    t.index ["employer_id"], name: "index_applicants_on_employer_id"
    t.index ["job_id"], name: "index_applicants_on_job_id"
  end

  create_table "documents", force: :cascade do |t|
    t.string "filename"
    t.string "content_type"
    t.binary "file_contents"
    t.bigint "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employee_id"], name: "index_documents_on_employee_id"
  end

  create_table "employees", force: :cascade do |t|
    t.citext "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_employees_on_email", unique: true
  end

  create_table "employers", force: :cascade do |t|
    t.string "name"
    t.citext "email"
    t.string "password_digest"
    t.string "subscription"
    t.boolean "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["email"], name: "index_employers_on_email", unique: true
  end

  create_table "experiences", force: :cascade do |t|
    t.string "title"
    t.string "company"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.string "phone"
    t.string "startdate"
    t.string "enddate"
    t.text "description"
    t.boolean "current"
    t.bigint "profile_id", null: false
    t.bigint "employee_id", null: false
    t.index ["employee_id"], name: "index_experiences_on_employee_id"
    t.index ["profile_id"], name: "index_experiences_on_profile_id"
  end

  create_table "jobs", force: :cascade do |t|
    t.string "title"
    t.boolean "status", default: false
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.float "longitude"
    t.float "latitude"
    t.text "jobtype", default: [], array: true
    t.text "schedule", default: [], array: true
    t.text "shifts", default: [], array: true
    t.text "seasonstart"
    t.text "seasonend"
    t.float "minpay"
    t.float "maxpay"
    t.text "industry"
    t.boolean "license"
    t.text "description"
    t.bigint "employer_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["employer_id"], name: "index_jobs_on_employer_id"
    t.index ["jobtype"], name: "index_jobs_on_jobtype", using: :gin
    t.index ["schedule"], name: "index_jobs_on_schedule", using: :gin
    t.index ["shifts"], name: "index_jobs_on_shifts", using: :gin
  end

  create_table "profiles", force: :cascade do |t|
    t.string "fname"
    t.string "lname"
    t.string "city"
    t.string "state"
    t.string "zipcode"
    t.boolean "license"
    t.float "longitude"
    t.float "latitude"
    t.string "phone"
    t.text "jobtype", default: [], array: true
    t.text "schedule", default: [], array: true
    t.text "shifts", default: [], array: true
    t.text "seasonstart"
    t.text "seasonend"
    t.float "minpay"
    t.float "maxpay"
    t.text "industry"
    t.text "description"
    t.bigint "employee_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "paytype"
    t.index ["employee_id"], name: "index_profiles_on_employee_id"
    t.index ["jobtype"], name: "index_profiles_on_jobtype", using: :gin
    t.index ["schedule"], name: "index_profiles_on_schedule", using: :gin
    t.index ["shifts"], name: "index_profiles_on_shifts", using: :gin
  end

  add_foreign_key "applicants", "employees"
  add_foreign_key "applicants", "employers"
  add_foreign_key "applicants", "jobs"
  add_foreign_key "documents", "employees"
  add_foreign_key "experiences", "employees"
  add_foreign_key "experiences", "profiles"
  add_foreign_key "jobs", "employers"
  add_foreign_key "profiles", "employees"
end
