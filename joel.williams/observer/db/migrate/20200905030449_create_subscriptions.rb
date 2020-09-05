class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.string :observerType
      t.integer :observerId
      t.sstring :subjectType
      t.integer :subsjectId

      t.timestamps
    end
  end
end
