class Api::V1::DocumentsController < ApplicationController
    before_action :set_employee, only: [:create, :update, :destroy]

    def index
        @documents = Document.all
    end

    def new
        @document = Document.new
    end

    def create
        @employee.file.attach(params[:file])
        # @document = Document.new(document_params)
        byebug
        if @employee.save
            render json: EmployeeSerializer.new(@employee)
        end
    end

    private
        def document_params
            params.permit(:file, :employee_id)
        end

    def set_employee
        @employee = Employee.find(params[:employee_id])
    end

end