class Lamp < ApplicationRecord

  attribute :type, :string, default: "Lamp"
  attribute :on, :boolean, default: false

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
