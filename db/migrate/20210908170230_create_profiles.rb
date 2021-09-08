class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    create_table :profiles do |t|
      t.string :fname
      t.string :lname
      t.integer :zipcode
      t.integer :phone
      t.string :status
      t.text :jobType, array: true, default: []
      t.text :schedule, array: true, default: []
      t.string :education
      t.text :history, array: true, default: []
      t.text :skills, array: true, default: []
      t.boolean :military, default: false
      t.text :certficates, array: true, default: []
      t.text :description
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
