class Api::ShelfAssignmentsController < ApplicationController
  def create
    @shelf_assignment = ShelfAssignment.create!(shelf_assignment_params)

    render :show
  end

  def destroy
    @shelf_assignment = ShelfAssignment.find(params[:id])
    if @shelf_assignment.destroy
      render :show
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
