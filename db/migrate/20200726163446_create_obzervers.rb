class CreateObzervers < ActiveRecord::Migration[5.2]
  def change
    create_table :obzervers do |t|

      t.timestamps
    end
  end
end
