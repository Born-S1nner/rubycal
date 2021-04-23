ActiveRecord::Schema.define(version: 2021_04_21_203900) do

  create_table "calculators", force: :cascade do |t|
    t.integer "first_input"
    t.integer "second_input"
    t.integer "operation"
    t.float "result"
    t.integer "request_count"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
