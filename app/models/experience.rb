class Experience < ApplicationRecord
    has_one :profile
    has_one :employee, through: :profile

end