class Api::BooksController < ApplicationController

  def create
    @book = Book.new(book_params)

    if @book.save
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
  end

  def index
    @books = Book.all
    render "api/books/index"
  end

  def show
    @book = Book.find(params[:id])
  end

  def update
    @book = Book.find(params[:id])

    if @book.update(book_params)
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
  end

  def status
    debugger
    @book = Book.find(params[:id])
    @reading = Reading.find_or_create_by({book_id: @book.id, user_id: current_user.id})
    @reading.update!(status: params[:book][:status])
    render :show
  end

  def destroy
    @book = Book.find(params[:id])

    if @book.destroy
      render :show
    end
  end

  def book_params
    params.require(:book).permit(:title, :author_fname, :author_lname, :cover, :description, :status)
  end
end
