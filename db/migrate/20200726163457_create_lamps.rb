class CreateLamps < ActiveRecord::Migration[5.2]
  def change
    create_table :lamps do |t|

      t.timestamps
    end
  end
end
