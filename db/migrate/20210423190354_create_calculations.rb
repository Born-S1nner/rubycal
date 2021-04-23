class CreateCalculations < ActiveRecord::Migration[6.1]
  def change
    create_table :calculations do |t|
      t.integer :first_input
      t.integer :second_input
      t.integer :operation
      t.float :result
      t.integer :requested_count

      t.timestamps
    end
  end
end
