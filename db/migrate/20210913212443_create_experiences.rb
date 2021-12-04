class CreateExperiences < ActiveRecord::Migration[6.0]
  def change
    create_table :experiences do |t|
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
      t.references :employee, null: false, foreign_key: true
    end
  end
end
