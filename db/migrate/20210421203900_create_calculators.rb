class CreateCalculators < ActiveRecord::Migration[6.1]
  def change
    create_table :calculators do |t|
      t.integer :first_input
      t.integer :second_input
      t.integer :operation
      t.float :result
      t.integer :request_count

      t.timestamps
    end
  end
end
