module SmartEditor
  def self.setup
    yield self        
  end

  class Engine < Rails::Engine
  end
end
