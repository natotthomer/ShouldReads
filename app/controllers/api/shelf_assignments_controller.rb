class Api::ShelfAssignmentsController < ApplicationController
  def create
    shelf_assignment = ShelfAssignment.create!(shelf_assignment_params)
    @shelf = shelf_assignment.shelf
    render 'api/shelves/show'
  end

  def remove
    shelf_assignment = ShelfAssignment.find_by(
      book_id: params[:shelf_assignment][:book_id],
      shelf_id: params[:shelf_assignment][:shelf_id]
    )
    @shelf = shelf_assignment.shelf
    if shelf_assignment.destroy
      render 'api/shelves/show'
    end
  end

  def update
    @shelf_assignment = ShelfAssignment.find(params[:id])

    if @shelf_assignment.update(shelf_assignment_params)
      render :show
    end
  end

  def shelf_assignment_params
    params.require(:shelf_assignment).permit(:book_id, :shelf_id)
  end

end
