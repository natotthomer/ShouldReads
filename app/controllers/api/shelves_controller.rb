class Api::ShelvesController < ApplicationController
  def create
    @shelf = Shelf.new(shelf_params)
    if @shelf.save
      render "api/shelves/show"
    else
      render json: @shelf.errors, status: 422
    end
  end

  def show
    @shelf = Shelf.find(params[:id])
    render "api/shelves/show"
  end

  def index
    @shelves = current_user.shelves.includes(:books)
    render :index
  end

  def shelf_params
    params.require(:shelf).permit(:user_id, :title, :description, :username)
  end
end
