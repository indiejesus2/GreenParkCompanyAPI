class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.string :filename
      t.string :content_type
      t.binary :file_contents
      t.references :employee, null: false, foreign_key: true

      t.timestamps
    end
  end
end
