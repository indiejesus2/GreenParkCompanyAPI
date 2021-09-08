class EmployeeSerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :email
    has_one :profile
    attribute :profile do |employee|
        data = Profile.where(employee_id: employee.id)
        # profile = {data}|
    end
end