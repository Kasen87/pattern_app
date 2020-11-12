class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.string :observerType
      t.integer :observerId
      t.string :subjectType
      t.integer :subjectId

      t.timestamps
    end
  end
end
