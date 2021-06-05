class Order < ApplicationRecord
  has_many :line_foods

  validates :total_price, numericality: { greater_than: 0 }

  # トランザクションはトランザクション内で例外が発生した場合にロールバックをするという特徴（save!、update!など）
  def save_with_update_line_foods!(line_foods)
    ActiveRecord::Base.transaction do
      line_foods.each do |line_food|
        # self = laravelのthis
        line_food.update!(active: false, order: self)
      end
      self.save!
    end
  end
end