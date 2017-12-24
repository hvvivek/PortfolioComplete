class RenameTypeToMediatype < ActiveRecord::Migration[5.1]
  def change
    rename_column :media, :type, :mediatype
  end
end
