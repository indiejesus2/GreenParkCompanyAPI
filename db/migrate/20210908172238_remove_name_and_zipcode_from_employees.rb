class RemoveNameAndZipcodeFromEmployees < ActiveRecord::Migration[6.0]
  def change
    remove_column :employees, :name, :string
    remove_column :employees, :zipcode, :integer
  end
end
