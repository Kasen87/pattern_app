end
class Subject < ApplicationRecord
  attr_accessor :observers

  def initialize()
    @observers = []
  end

  def attach(id)
    self.observers.push({ id: id })
  end

  def detach(id)
    self.observers.reject { |obs| obs.id == id }
  end

  def notify()
    # TODO - pass model type to update method to loosen coupling
    self.observers.each { |obs| obs.update(self.id) }
  end
  
end
