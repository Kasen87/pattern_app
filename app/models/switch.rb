class Switch < Subject < ApplicationRecord
  attr_accessor :on
  
    def initialize()
      @on = false
    end
  end
  