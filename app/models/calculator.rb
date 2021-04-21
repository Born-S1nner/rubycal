#t.integer "first_input"
#t.integer "second_input"
#t.integer "operation"
#t.float "result"
#t.integer "request_count"

class Calculator < ApplicationRecord
  enum operation: [ :sum_op, :difference_op, :multiplication_op, :division_op ]

  def calculate
    self.result = eval "#{Float(first_input)} #{operator} #{Integer(second_input)}" 
    raise "Invalid result: #{result}" if result.nan? || result.infinite?
  rescue => e
    self.result = nil 
    self.result_error = e
  ensure
    return result
  end

  def operator
    case operation.to_sym
    when :sum_op then '+'
    when :difference_op then '-'
    when :multiplication_op then '*'
    when :division_op then '/'
  end

end
