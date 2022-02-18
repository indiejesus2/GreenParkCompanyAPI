class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :title
      t.string :company
      t.string :city
      t.string :state
      t.string :zipcode
      t.string :phone
      t.string :startdate
      t.string :enddate
      t.text :description
      t.boolean :current
      t.references :employee, type: :uuid
      # t.references :employee, null: false, foreign_key: true
    end
    add_index :experiences, :employee_id, unique: true
  end
end
