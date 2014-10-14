class AddAttachmentImageToSmartEditors < ActiveRecord::Migration
  def self.up
    change_table :smart_editors do |t|
      t.has_attached_file :image
    end
  end

  def self.down
    drop_attached_file :smart_editors, :image
  end
end
