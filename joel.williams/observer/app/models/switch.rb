class Switch < ApplicationRecord
  # this is a Subject and should inherent certain methods/behaviors
  attribute :type, :string, default: "Switch"
  attribute :on, :boolean, default: false

  def flip
    self.update on: !on
    notifyObservers()
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

  # these belong to a Subject
  def plug_in(observerType, observerId)
    attach(observerType, observerId)
  end

  def unplug(observerType, observerId)
    detach(observerType, observerId)
  end
  
  private
    def notifyObservers() 
      Subscription.where(subjectId: self.id).each do | sub |
        self.convert_to_model(sub.observerType)
        .find(sub.observerId)
        .observerUpdate(self.type, self.id)
      end
    end

    def attach(observerType, observerId)
      subscription = Subscription.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
    end

    def detach(observerType, observerId)
      subscription = Subscription.find_by(observerType: observerType, observerId: observerId)
      Subscription.destroy(subscription.id)
    end
end
