class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.boolean :status, default: false
      t.string :city
      t.string :state
      t.string :zipcode
      t.float :longitude
      t.float :latitude
      t.text :jobtype, array: true, default: []
      t.text :schedule, array: true, default: []
      t.text :shifts, array: true, default: []
      t.text :seasonstart
      t.text :seasonend
      t.float :minpay
      t.string :paytype, default: "Hourly"
      t.text :trade
      t.boolean :license
      t.text :description
      t.references :employer, type: :uuid
      # t.references :employer, null: false, foreign_key: true
      t.timestamps
    end
    add_index :jobs, :jobtype, using: 'gin'
    add_index :jobs, :schedule, using: 'gin'
    add_index :jobs, :shifts, using: 'gin'
    # add_index :jobs, :employer_id, unique: true
  end
end
