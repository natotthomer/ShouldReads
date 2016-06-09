json.array! @shelves do |shelf|
  json.partial! 'api/shelves/shelf', shelf: shelf
end
