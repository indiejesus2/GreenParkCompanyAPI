class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.boolean :status, default: false
      t.string :city
      t.string :state
      t.float :longitude
      t.float :latitude
      t.text :jobType, array: true, default: []
      t.text :schedule, array: true, default: []
      t.text :skills, array: true, default: []
      t.text :certficates, array: true, default: []
      t.text :description
      t.references :employer, null: false, foreign_key: true
      t.timestamps
    end
  end
end
