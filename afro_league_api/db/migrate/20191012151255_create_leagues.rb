class CreateLeagues < ActiveRecord::Migration[6.0]
  def change
    create_table :leagues do |t|
      t.string :player
      t.string :position
      t.string :team
      t.string :coach

      t.timestamps
    end
  end
end
