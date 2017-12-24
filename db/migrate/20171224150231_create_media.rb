class CreateMedia < ActiveRecord::Migration[5.1]
  def change
    create_table :media do |t|
      t.string :caption
      t.string :link
      t.string :credits
      t.string :type
      t.integer :order
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
