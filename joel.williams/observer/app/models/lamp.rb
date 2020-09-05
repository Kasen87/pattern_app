class Lamp < ApplicationRecord
  attr_accessor :on, :type

  def update(type, id)
    subject = type.find(id)
    self.on = subject.on
  end
  
end
