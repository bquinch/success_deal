class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.text :content
      t.string :author
      t.string :company

      t.timestamps
    end
  end
end
