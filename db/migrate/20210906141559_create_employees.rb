class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    enable_extension(:citext)
    create_table :employees, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :name
      t.citext :email
      t.string :password_digest
      t.integer :zipcode
      t.timestamps
    end
    add_index :employees, :email, unique: true
  end
end
