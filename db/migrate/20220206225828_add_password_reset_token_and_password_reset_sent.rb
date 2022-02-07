class AddPasswordResetTokenAndPasswordResetSent < ActiveRecord::Migration[7.0]
  def change
    add_column :employees, :password_reset_token, :string
    add_column :employees, :password_reset_sent, :datetime
    add_column :employers, :password_reset_token, :string
    add_column :employers, :password_reset_sent, :datetime
  end
end
