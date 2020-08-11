class Subject < ApplicationRecord
  # NOTE: placeholder as this should exist as an abstract class
  
  # NOTE remove one-to-many relationship - remove .observers calls from methods
  # has_many :observers

  # def attach(observerType, observerId)
  #   observer = Observer.create(observerType: observerType, observerId: observerId, subjectType: self.type, subjectId: self.id)
  # end

  # def detach(observerType, observerId)
  #   observer = Observer.find_by(observerType: observerType, observerId: observerId)
  #   Observer.destroy(observer.id)
  # end

  # def notify()
  #   self.observers.each { | obs | 
  #     obs.observerType.find_by(id: obs.observerId).update(obs.subjectType, obs.subjectId).update(self.type, self.id)
  #   }
  # end
  
end
