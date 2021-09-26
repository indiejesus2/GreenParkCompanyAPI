class Profile < ApplicationRecord
  belongs_to :employee
  has_many :work_histories
  has_many :jobs, through: :employee
  geocoded_by :address
  # reverse_geocoded_by :latitude, :longitude
  after_validation :geocode
  # after_validation :reverse_geocode

  def address
    [city, state].compact.join(', ')
  end



end
