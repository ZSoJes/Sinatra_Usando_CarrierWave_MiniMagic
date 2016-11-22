class CreatePhotos < ActiveRecord::Migration
  def change
    create_table :users do |u|
      u.string :name
      u.string :email
      u.string :password_digest #digest es sinonimo de hash
    end

    create_table :photos do |t|
      t.belongs_to :user, index: true
      t.string :photo
      t.timestamps :created_at
    end
  end
end
