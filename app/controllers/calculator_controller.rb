class CalculatorController < ApplicationController
  def create
    @calculate = Calculator.find_or_initialize_by(calculate_params)
    
  end
  def index
  end
  
  private
  
  def calculate_params
    params.permit(:first_input, :second_input, :operation)
  end
end
