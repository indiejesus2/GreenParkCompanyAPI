class Profile < ApplicationRecord
  belongs_to :employee
  has_many :work_histories
  accepts_nested_attributes_for :work_histories
  geocoded_by :address
  after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end

end
