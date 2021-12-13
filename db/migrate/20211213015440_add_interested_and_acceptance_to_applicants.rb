class AddInterestedAndAcceptanceToApplicants < ActiveRecord::Migration[6.1]
  def change
    add_column :applicants, :interested, :boolean, default: false
    add_column :applicants, :acceptance, :boolean
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
