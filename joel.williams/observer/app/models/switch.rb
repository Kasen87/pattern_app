class Switch < ApplicationRecord 
  attr_accessor :on, :type
  
  # NOTE: this belongs to the abstract Subject

  def attach(observerType, observerId)
    observer = Observer.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
  end

  def detach(observerType, observerId)
    observer = Observer.find_by(observerType: observerType, observerId: observerId)
    Observer.destroy(observer.id)
  end

  # NOTE: Switch.type is nil when called, even though showing default of "Switch"
  # Note: transmute "Lamp" to model type Lamp
  def notify()
    Observer.all.each do | obs | 
      obs.observerType.find_by(id: obs.observerId).update(self.type, self.id)
    end
  end
  
  # NOTE: this belongs to switch 
  def flip
    self.on = !on
    self.notify()
  end
    
end
  