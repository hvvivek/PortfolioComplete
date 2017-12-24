class CreateProjects < ActiveRecord::Migration[5.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :thumb_img
      t.string :thumb_vid
      t.text :short_desc
      t.string :location
      t.string :period
      t.date :date
      t.text :long_desc
      t.text :recognition
      t.text :role
      t.integer :views

      t.timestamps
    end
  end
end
