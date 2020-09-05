class Switch < ApplicationRecord
  attr_accessor :on, :type

  def plug_in(observerType, observerId)
    self.attach(observerType, observerId)
  end

  def unplug(observerType, observerId)
    self.detach(observerType, observerId)
  end


  def flip
    self.on = !on 
    self.notify()
  end
  
  # these methods belong to a Subject
  private
  
  def attach(observerType, observerId)
    subscription = Subscription.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
  end

  def detach(observerType, observerId)
    subscription = Subscription.find_by(observerType: observerType, observerId: observerId)
    Subscription.destroy(subscription.id)
  end

  def notify()
    Subscription.all.each do | sub |
      sub.observerType
      .find_by(id: sub.observerId)
      .update(self.type, self.id)
  end
  
end
