require 'securerandom'
require 'rails/generators'
require 'rails/generators/migration'

module SmartEditor
  class InstallGenerator < Rails::Generators::Base
    source_root File.expand_path("../templates", __FILE__)
    
    # Copy config file for my gem
    def create_file_config
      template "config/smart_editor.yml", "config/smart_editor.yml"
    end
    
    def copy_migration
      template "migrations/01_create_smart_editor.rb", "db/migrate/01_create_smart_editor.rb"
      template "migrations/02_add_attachment_image_to_smart_editors.rb", "db/migrate/02_add_attachment_image_to_smart_editors.rb"
    end
    
    def copy_model
      template 'models/smart_editor.rb', 'app/models/smart_editor.rb'
    end
    
    
  end
end

