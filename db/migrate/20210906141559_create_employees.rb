class CreateEmployees < ActiveRecord::Migration[6.0]
  def change
    create_table :employees do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :zipcode
      t.timestamps
    end
    add_index :employees, :email, unique: true
  end
end
