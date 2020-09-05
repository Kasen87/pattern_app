class Lamp < ApplicationRecord
  attr_accessor :on, :type

   # TODO: dupe code - move to helper
   def convert_to_model(modelName)
    case modelName
    when "Lamp"
      Lamp
    when "Switch"
      Switch
    else
      "Error 404: no model found by name #{modelName}"
    end
  end

  def update(type, id)
    subject = self.convert_to_model(type).find(id)
    self.on = subject.on
  end

end
