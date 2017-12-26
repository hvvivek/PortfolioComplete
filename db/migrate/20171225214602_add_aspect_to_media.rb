class AddAspectToMedia < ActiveRecord::Migration[5.1]
  def change
    add_column :media, :aspect, :integer
  end
end
