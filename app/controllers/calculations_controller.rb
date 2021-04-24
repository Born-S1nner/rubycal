class CalculationsController < ApplicationController
  before_action :set_calculation, only: %i[ show edit update destroy ]

  # GET /calculations or /calculations.json
  def index
    @calculations = Calculation.all
  end

  # GET /calculations/new
  def new
    @calculation = Calculation.new
  end

  # POST /calculations or /calculations.json
  def create
    @calculation = Calculation.find_or_initialize_by(calculation_params)

    @calculation.request_count =+ 1
    @calculation.save
  rescue

  end

  # DELETE /calculations/1 or /calculations/1.json
  def destroy
    @calculation.destroy
    respond_to do |format|
      format.html { redirect_to calculations_url, notice: "Calculation was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_calculation
      @calculation = Calculation.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def calculation_params
      params.require(:calculation).permit(:first_input, :second_input, :operation)
    end
end
