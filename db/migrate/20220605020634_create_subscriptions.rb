class CreateSubscriptions < ActiveRecord::Migration[6.1]
  def change
    create_table :subscriptions do |t|
      t.references :plan, null: false, foreign_key: true
      t.references :employer, null: false, foreign_key: true, type: :uuid
      t.boolean :active
      t.string :stripe_id

      t.timestamps
    end
  end
end
