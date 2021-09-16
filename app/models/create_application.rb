class CreateApplication < ApplicationRecord
  belongs_to :employee
  belongs_to :employer
  belongs_to :job
end
