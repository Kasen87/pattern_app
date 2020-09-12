class Lamp < ApplicationRecord

  def set_default
    self.update type: "Lamp"
    self.update on: false
  end

  def initialize(args = {})
    super
    self.set_default
  end

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

  def updateObserver(type, id)
    subject = self.convert_to_model(type).find(id)
    self.update on: subject.on
  end

end
