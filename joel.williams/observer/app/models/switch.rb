class Switch < ApplicationRecord

  def set_default
    self.update type: "Switch"
    self.update on: false
  end

  def initialize(args)
    super
    self.set_default
  end

  def plug_in(observerType, observerId)
    attach(observerType, observerId)
  end

  def unplug(observerType, observerId)
    detach(observerType, observerId)
  end


  def flip
    self.update on: !on
    notify()
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

  # these methods belong to a Subject
  # private
    
    def attach(observerType, observerId)
      subscription = Subscription.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
    end

    def detach(observerType, observerId)
      subscription = Subscription.find_by(observerType: observerType, observerId: observerId)
      Subscription.destroy(subscription.id)
    end

    def notify() 
      # TODO: this is returning single entity not array - check AR options
      Subscription.where(subjectId: self.id).each do | sub |
        self.convert_to_model(sub.observerType)
        .find(sub.observerId)
        .updateObserver(self.type, self.id)
    end

  end
  
end
