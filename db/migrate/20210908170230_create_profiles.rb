class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    enable_extension 'hstore' unless extension_enabled?('hstore')
    create_table :profiles, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :fname
      t.string :lname
      t.string :city
      t.string :state
      t.string :zipcode
      t.boolean :license
      t.float :longitude
      t.float :latitude
      t.string :phone
      # t.string :status
      t.text :jobtype, array: true, default: []
      t.text :schedule, array: true, default: []
      # t.string :education
      # t.hstore :history
      t.text :shifts, array: true, default: []
      t.text :seasonstart
      t.text :seasonend
      t.float :minpay
      t.integer :commute, default: "100"
      t.text :trade, default: "Other/None"
      # t.boolean :military, default: false
      # t.text :certificates, array: true, default: []
      t.text :description
      t.references :employee, type: :uuid
      # t.uuid :employee_id
      # t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
    add_index :profiles, :jobtype, using: 'gin'
    add_index :profiles, :schedule, using: 'gin'
    add_index :profiles, :shifts, using: 'gin'
    # add_index :profiles, :employee_id, unique: true
    # add_index :profiles, :certificates, using: 'gin'
    #Ex:- add_index("admin_users", "username")
  end
end
