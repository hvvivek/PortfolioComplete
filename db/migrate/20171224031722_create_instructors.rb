class CreateInstructors < ActiveRecord::Migration[5.1]
  def change
    create_table :instructors do |t|
      t.string :name
      t.string :link
      t.string :contact
      t.references :project, foreign_key: true

      t.timestamps
    end
  end
end
