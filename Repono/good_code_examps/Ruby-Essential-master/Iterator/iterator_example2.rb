fruits = ['banana', 'apple', 'pear']
# => ["banana", "apple", "pear"]
fruits.each do |fruit|
  puts fruit.capitalize
end

# another syntax
for fruit in fruits
  puts fruit.capitalize
end