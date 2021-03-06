# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160609201747) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "books", force: :cascade do |t|
    t.string   "title",              null: false
    t.string   "author_fname",       null: false
    t.string   "author_lname",       null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "cover_file_name"
    t.string   "cover_content_type"
    t.integer  "cover_file_size"
    t.datetime "cover_updated_at"
    t.string   "description"
  end

  add_index "books", ["author_fname"], name: "index_books_on_author_fname", using: :btree
  add_index "books", ["author_lname"], name: "index_books_on_author_lname", using: :btree
  add_index "books", ["title", "author_fname", "author_lname"], name: "index_books_on_title_and_author_fname_and_author_lname", unique: true, using: :btree
  add_index "books", ["title"], name: "index_books_on_title", using: :btree

  create_table "readings", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "book_id",    null: false
    t.string   "status"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "readings", ["book_id"], name: "index_readings_on_book_id", using: :btree
  add_index "readings", ["user_id"], name: "index_readings_on_user_id", using: :btree

  create_table "shelf_assignments", force: :cascade do |t|
    t.integer "shelf_id", null: false
    t.integer "book_id",  null: false
  end

  create_table "shelves", force: :cascade do |t|
    t.integer "user_id",     null: false
    t.string  "title",       null: false
    t.text    "description"
  end

  add_index "shelves", ["title"], name: "index_shelves_on_title", using: :btree
  add_index "shelves", ["user_id"], name: "index_shelves_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "password_digest"
    t.string   "twitter_uid"
  end

  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
