class CreateApplicants < ActiveRecord::Migration[6.0]
  def change
    create_table :applicants, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.references :employee, type: :uuid
      t.references :employer, type: :uuid
      t.references :job, type: :uuid
      # t.references :employee, null: false, foreign_key: true
      # t.references :employer, null: false, foreign_key: true
      # t.references :job, null: false, foreign_key: true
      t.integer :rating, default: 0
      t.float :distance
      t.timestamps
    end
  end
end
