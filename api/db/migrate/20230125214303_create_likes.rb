class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.references :user
      t.references :material
      t.timestamps
    end
  end
end
