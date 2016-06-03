class Api::ShelfAssignmentController < ApplicationController
  def create
    @shelf_assignment = ShelfAssignment.create!(shelf_assignment_params)
  end

  def shelf_assignment_params
    params.require(:shelf_assignment).permit(:book_id, :shelf_id)
  end

end
