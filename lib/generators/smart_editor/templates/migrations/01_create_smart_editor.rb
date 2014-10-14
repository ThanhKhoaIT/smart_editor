class CreateSmartEditor < ActiveRecord::Migration
  def change
    create_table :smart_editors do |t|
      t.string :image

      t.timestamps
    end
  end
end
