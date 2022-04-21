class AddDefaultValuesToApplicants < ActiveRecord::Migration[6.1]
  def change
      change_column :applicants, :acceptance, :boolean, :default => false
      change_column :applicants, :savedJob, :boolean, :default => false
      change_column :applicants, :savedApplicant, :boolean, :default => false
      #Ex:- change_column("admin_users", "email", :string, :limit =>25)
  end
end
