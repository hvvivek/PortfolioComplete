class AddAutoplayToMedia < ActiveRecord::Migration[5.1]
  def change
    add_column :media, :autoplay, :integer
  end
end
