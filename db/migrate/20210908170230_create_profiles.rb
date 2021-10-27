class CreateProfiles < ActiveRecord::Migration[6.0]
  def change
    enable_extension 'hstore' unless extension_enabled?('hstore')
    create_table :profiles do |t|
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
      t.float :maxpay
      t.text :industry
      # t.boolean :military, default: false
      # t.text :certificates, array: true, default: []
      t.text :description
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
    add_index :profiles, :jobtype, using: 'gin'
    add_index :profiles, :schedule, using: 'gin'
    add_index :profiles, :shifts, using: 'gin'
    # add_index :profiles, :certificates, using: 'gin'
    #Ex:- add_index("admin_users", "username")
  end
end
