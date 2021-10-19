class CreateEmployers < ActiveRecord::Migration[6.0]
  def change
    enable_extension(:citext)
    create_table :employers do |t|
      t.string :name
      t.citext :email
      t.string :password_digest
      t.string :subscription
      t.boolean :status
      t.timestamps
    end
    add_index :employers, :email, unique: true
  end
end
