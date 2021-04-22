class CalculatorController < ApplicationController
  def create
    @calculate = Calculator.find_or_initialize_by(calculate_params)
    @calculate.request_count += 1
    @calculate.save
  rescue
  
  end

  private
  
  def calculate_params
    params.permit(:first_input, :second_input, :operation)
  end
end
