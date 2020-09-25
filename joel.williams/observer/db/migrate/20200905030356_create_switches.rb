class CreateSwitches < ActiveRecord::Migration[5.2]
  def change
    create_table :switches do |t|
      t.boolean :on
      t.string :type

      t.timestamps
    end
  end
end
