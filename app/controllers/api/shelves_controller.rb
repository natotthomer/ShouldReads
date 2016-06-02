class Api::ShelvesController < ApplicationController
  def create
    @shelf = Shelf.new(shelf_params)

    if @shelf.save
      render "api/shelves/show"
    else
      render json: @shelf.errors, status: 422
    end
  end

  def index
    @shelves = current_user.shelves
    render :index
  end

  def shelf_params
    params.require(:shelf).permit(:user_id, :title, :description)
  end
end
