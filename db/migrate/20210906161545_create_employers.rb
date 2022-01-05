class CreateEmployers < ActiveRecord::Migration[6.0]
  def change
    enable_extension(:citext)
    create_table :employers do |t|
      t.string :name
      t.citext :email
      t.string :phone
      t.text :description
      t.string :password_digest
      t.boolean :monthly
      t.boolean :yearly
      t.boolean :trial
      t.integer :trial_period
      t.boolean :status
      t.timestamps
    end
    add_index :employers, :email, unique: true
  end
end
