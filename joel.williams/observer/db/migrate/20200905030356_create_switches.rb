class CreateSwitches < ActiveRecord::Migration[5.2]
  def change
    create_table :switches do |t|
      t.boolean :on, default: false
      t.string :type, default: "Switch"

      t.timestamps
    end
  end
end
