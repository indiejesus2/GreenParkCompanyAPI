class AddDefaultValuesToEmployers < ActiveRecord::Migration[6.1]
  def change
    change_column :employers, :monthly, :boolean, :default => false
    change_column :employers, :yearly, :boolean, :default => false
    change_column :employers, :status, :boolean, :default => false
    #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
