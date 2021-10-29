class Api::V1::DocumentsController < ApplicationController
    before_action :set_employee, only: [:update, :destroy]

    def index
        @documents = Document.all
    end

    def new
        @document = Document.new
    end

    def create
        byebug
        @document = Document.new(document_params)
        if @document.save
            render json: @document
        end
    end

    def set_employee
        byebug
        @employee = Employee.find_by(params[:employee_id])
    end

end