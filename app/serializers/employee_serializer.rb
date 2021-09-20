class EmployeeSerializer
    include FastJsonapi::ObjectSerializer
    set_id :job_ids
    attributes :id, :email, :job_ids
    has_one :profile
    has_many :work_histories, through: :profile
    has_many :applicants
    has_many :jobs, through: :applicants
    # attribute :profile do |employee|
    #     data = Profile.where(employee_id: employee.id)
    #     history = WorkHistory.where(employee_id: employee.id)
    #     data.each do |pro|
    #     # history = 
    #     # profile = 
    #     # data.each do |pro|
    #         profile[:id] = pro.id
    #         profile[:fname] = pro.fname
    #         profile[:]
    #     end
    # end
end 