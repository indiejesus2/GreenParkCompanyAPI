class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents, id: :uuid, default: 'gen_random_uuid()' do |t|
      t.string :filename
      t.string :content_type
      t.binary :file_contents
      t.references :employee, type: :uuid
      # t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
