class WorkHistorySerializer
    include FastJsonapi::ObjectSerializer
    attributes :id, :title, :company, :city, :state, :phone, :startdate, :enddate, :description, :current, :profile_id, :employee_id
end