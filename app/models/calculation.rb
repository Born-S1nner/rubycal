class Calculation < ApplicationRecord
  before_create :calculate

  enum operation: [
    :sum_op,
    :difference_op,
    :multiplication_op,
    :division_op
  ]

  validates(
    :result,
    numericality: true,
    if: proc { |c| c.result.present? }
  )

  validates(
    :first_input,
    :second_input,
    :request_count,
    numericality: {
      only_integer: true,
      less_than: 100,
      greater_than_or_equal_to: 0
    }
  )

  protected

  def calculate
    self.result = eval "#{Float(first_input)} #{operator} #{Integer(second_input)}" # prevent sql injection
    raise "Invalid result: #{result}" if result.nan? || result.infinite?
  rescue => e
    self.result = nil # override previous result
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
  
end
