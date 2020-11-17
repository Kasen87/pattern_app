class Lamp < ApplicationRecord
  # this is an Observer and should inherit certain methods/behaviors
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

  # this belongs to an Observer
  # "namespaced" to remove conflict between Active Record default update method
  def observerUpdate(type, id)
    subject = self.convert_to_model(type).find(id)
    self.update on: subject.on
  end

end
