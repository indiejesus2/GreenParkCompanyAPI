class Job < ApplicationRecord
    belongs_to :employer
    has_many :employees
    geocoded_by :address
    after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

end  