class Lamp < Obzerver < ApplicationRecord
  attr_accessor :on

  def initialize()
    @on = false
  end

  def update(id)
    # TODO - overwrite Obz update to both query Subject entity && update state appropriately
  end
end
