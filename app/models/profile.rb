class Profile < ApplicationRecord
  belongs_to :employee
  geocoded_by :address
  after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

end
