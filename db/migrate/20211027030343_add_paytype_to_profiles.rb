class AddPaytypeToProfiles < ActiveRecord::Migration[6.1]
  def change
    add_column :profiles, :paytype, :string
  end
end
