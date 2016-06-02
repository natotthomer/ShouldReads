class Api::BooksController < ApplicationController

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    # what status codes do I actually want to put in here?
    if @book.save
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
  end

  def show
    @book = Book.find(params[:id])
    render "api/books/show"
  end

  def index
    @books = Book.all
    render "api/users/"
  end

  def edit
    @book = Book.find(params[:id])

    # Does this seem right? And again with the status codes
    if @book
      render "api/books/show"
    else
      render json: @book.errors, status: 422
    end
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
