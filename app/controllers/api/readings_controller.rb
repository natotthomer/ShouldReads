class Api::ReadingsController < ApplicationController
  def create
    @reading = Reading.create!(reading_params)
  end

  def update
    @reading = Reading.find(params[:id])

    if @reading.update(reading_params)
      render "api/books/show"
    else
      render json: @reading.errors, status: 422
    end
  end

  def destroy
    @reading = Reading.find(params[:id])

    if @reading.destroy
      render :show
    end
  end

  def reading_params
    params.require(:shelf_assignment).permit(:book_id, :shelf_id)
  end

end
