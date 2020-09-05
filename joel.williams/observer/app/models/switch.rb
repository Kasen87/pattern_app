class Switch < ApplicationRecord
  attr_accessor :on, :type

  def plug_in(observerType, observerId)
    attach(observerType, observerId)
  end

  def unplug(observerType, observerId)
    detach(observerType, observerId)
  end


  def flip
    # TODO: add Pry and check here to see why ON isn't changing value
    self.on = !on
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
    
  # TODO: Migration defaults are only soft-set.
  # shows in full instance object but not when calling X.on or X.type
    def attach(observerType, observerId)
      subscription = Subscription.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
    end

    def detach(observerType, observerId)
      subscription = Subscription.find_by(observerType: observerType, observerId: observerId)
      Subscription.destroy(subscription.id)
    end

    def notify()
      Subscription.all.each do | sub |
        self.convert_to_model(sub.observerType).find_by(id: sub.observerId).update(self.type, self.id)
    end

  end
  
end
