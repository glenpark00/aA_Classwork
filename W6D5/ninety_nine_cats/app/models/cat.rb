class Cat < ApplicationRecord
  include ActionView::Helpers::DateHelper
  COLORS = ['Black', 'White', 'Grey', 'Brown', 'Orange']
  SEX = ['M', 'F']

  validates :color, inclusion: COLORS
  validates :sex, inclusion: SEX
  validates :name, :color, :sex, :description, :birth_date, presence: true

  def age
    time_ago_in_words(birth_date)
  end

  def self.colors
    COLORS
  end
end
