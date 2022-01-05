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

ActiveRecord::Schema.define(version: 2021_12_13_015440) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "citext"
  enable_extension "hstore"
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "applicants", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.bigint "employer_id", null: false
    t.bigint "job_id", null: false
    t.integer "rating", default: 0
    t.float "distance"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "interested", default: false
    t.boolean "acceptance"
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
    t.string "phone"
    t.text "description"
    t.string "password_digest"
    t.boolean "monthly"
    t.boolean "yearly"
    t.boolean "trial"
    t.integer "trial_period"
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
    t.bigint "employee_id", null: false
    t.index ["employee_id"], name: "index_experiences_on_employee_id"
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
    t.string "paytype", default: "Hourly"
    t.text "trade"
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
    t.integer "commute"
    t.text "trade"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "applicants", "employees"
  add_foreign_key "applicants", "employers"
  add_foreign_key "applicants", "jobs"
  add_foreign_key "documents", "employees"
  add_foreign_key "experiences", "employees"
  add_foreign_key "jobs", "employers"
  add_foreign_key "profiles", "employees"
end
