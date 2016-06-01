class Api::BooksController < ApplicationController

  def new
    @book = Book.new
  end

  def create
    @book = Book.new(book_params)

    if @book.save
      render "api/books/show"
    else
      render json: @book.errors, status: 422
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

    if @book

  end

  def update
    @book = Book.find(params[:id])
  end

  def destroy
    @book = Book.find(params[:id])
  end

  def book_params
    params.require(:book).permit(:title, :author_fname, :author_lname)
  end
end
