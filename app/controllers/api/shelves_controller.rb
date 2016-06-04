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

  def update
    @shelf = Shelf.find(params[:id])

    if @shelf.update(shelf_params)
      render :show
    end
  end

  def destroy
    @shelf = Shelf.find(params[:id])

    if @shelf.destroy
      render :show
    end
  end

  def shelf_params
    params.require(:shelf).permit(:user_id, :title, :description, :username)
  end
end
