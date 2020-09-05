class CreateLamps < ActiveRecord::Migration[5.2]
  def change
    create_table :lamps do |t|
      t.boolean :on, default: false
      t.string :type, default: "Lamp"
      
      t.timestamps
    end
  end
end
