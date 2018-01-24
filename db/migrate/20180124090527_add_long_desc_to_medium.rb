class AddLongDescToMedium < ActiveRecord::Migration[5.1]
  def change
    add_column :media, :long_desc, :text
  end
end
