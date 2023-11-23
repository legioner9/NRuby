# inject examples

array = [*1..10]
puts array

#example 1
sum = array.inject {|memo, n| memo + n }
puts sum

#example 2
sum = array.inject(100) {|memo, n| memo + n}
puts sum

#example 3
product = array.inject {|memo, n| memo * n}
puts product

#example 4
product = array.inject(2) {|memo, n| memo * n}
puts product

#example 5
sum = array.inject {|memo, n| puts memo + n; memo } 
puts sum

#example 6
fruits = ['apple', 'pear', 'banana', 'plum']
puts fruits

longest_word =fruits.inject do |memo,fruit|
   if memo.length > fruit.length
         memo
   else
         fruit
   end
end
puts "longest_word is: #{longest_word}"

#example 7
menu =["Home", "History", "Products", "Services", "Contact Us"]
puts menu.inject(10) {|memo, item| memo + item.length}