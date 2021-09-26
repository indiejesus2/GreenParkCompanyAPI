class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.boolean :status, default: false
      t.string :city
      t.string :state
      t.string :zipcode
      t.float :longitude
      t.float :latitude
      t.text :jobtype, array: true, default: []
      t.text :schedule, array: true, default: []
      t.text :skills, array: true, default: []
      t.text :certificates, array: true, default: []
      t.text :description
      t.references :employer, null: false, foreign_key: true
      t.timestamps
    end
    add_index :jobs, :jobtype, using: 'gin'
    add_index :jobs, :schedule, using: 'gin'
    add_index :jobs, :skills, using: 'gin'
    add_index :jobs, :certificates, using: 'gin'
  end
end
