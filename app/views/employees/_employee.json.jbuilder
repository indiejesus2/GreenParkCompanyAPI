json.extract! employee, :id, :email, :created_at, :updated_at
json.url employee_url(employee, format: :json)
