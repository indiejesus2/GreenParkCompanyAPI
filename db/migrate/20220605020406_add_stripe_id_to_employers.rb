class AddStripeIdToEmployers < ActiveRecord::Migration[6.1]
  def change
    add_column :employers, :stripe_id, :string
  end
end
