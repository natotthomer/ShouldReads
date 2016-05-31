# Schema Information

## books
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
title          | string    | not null
author_name    | string    | not null, indexed
cover_url      | string    | not null

## shelves
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    | not null

## shelf_assignment
column name | data type | details
------------|-----------|-----------------------
shelf_id    | integer   | not null, foreign key (references shelves), indexed
book_id     | integer   | not null, foreign key (references books), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
book_id     | integer   | not null, foreign key (references books), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## follows
column name | data type | details
------------|-----------|--------------------
follower_id | integer   | not null, foreign key
followee_id | integer   | not null, foreign key

## reviews
column name | data type | details
------------|-----------|--------------------
author_id   | integer   | not null, foreign key
book_id     | integer   | not null, foreign key
title       | string    | not null
body        | text      | not null

## ratings
column name | data type | details
------------|-----------|--------------------
author_id   | integer   | not null, foreign key
book_id     | integer   | not null, foreign key
stars       | integer   | not null, default: 0
