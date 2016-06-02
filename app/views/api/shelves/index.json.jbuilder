json.array! @shelves do |shelf|

  json.title shelf.title
  json.description shelf.description
  json.user_id shelf.user_id
  json.id shelf.id
end
