class CreateSubjects < ActiveRecord::Migration[5.2]
  def change
    create_table :subjects do |t|
      t.string :type, :default => ''
      t.timestamps
    end
  end
end
