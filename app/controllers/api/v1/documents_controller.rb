class Api::V1::DocumentsController < ApplicationController
    before_action :set_employee, only: [:create, :update, :destroy]

    def index
        @documents = Document.all
    end

    def new
        @document = Document.new
    end

    def create
        # byebug
        @employee.file.attach(params[:file])
        if @employee.save
            render json: {file: @employee.file.url}
        end
    end

    private
        def document_params
            params.permit(:filename, :employee_id, :content_type, )
        end

    def set_employee
        @employee = Employee.find(params[:employee_id])
    end

end