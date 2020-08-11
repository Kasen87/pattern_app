class Lamp < ApplicationRecord
  attr_accessor :on, :type

  def update(type, id)
    # TODO - overwrite Obz update to both query Subject entity && update state appropriately
    subject = type.find(id)
    self.on = subject.on
  end
end
