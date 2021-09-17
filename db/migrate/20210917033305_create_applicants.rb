class CreateApplicants < ActiveRecord::Migration[6.0]
  def change
    create_table :applicants do |t|
      t.references :employee, null: false, foreign_key: true
      t.references :employer, null: false, foreign_key: true
      t.references :job, null: false, foreign_key: true

      t.timestamps
    end
  end
end
