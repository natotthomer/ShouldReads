class Api::BooksController < ApplicationController

  def create
    @book = Book.new(book_params)

    # what status codes do I actually want to put in here?
    if @book.save
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
  end

  def index
    @books = current_user.books
    render "api/books/index"
  end

  def update
    @book = Book.find(params[:id])

    # And yet again. What codes mean what and
    if @book.save
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
  end

  def destroy
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author_fname, :author_lname)
  end
end
