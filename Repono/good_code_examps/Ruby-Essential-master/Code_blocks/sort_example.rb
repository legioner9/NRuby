# sort example
puts 1<=> 2

puts 2 <=> 1

puts 2 <=> 2

#example 2
puts array =[3,1,5,2,4]

puts "after sorting: array look like this"
puts array.sort {|v1,v2| v1 <=> v2 }
# it can be done like:
array.sort

puts  " reverse sort"

array.sort {|v1,v2| v2 <=> v1}
# it can done by:
array.sort.reverse

# example 3
fruits =['banana', 'apple', 'orange', 'pear']
puts fruits.sort {|fruit1,fruit2| fruit1.length <=> fruit2.length }
puts fruits.sort {|fruit1,fruit2| fruit2.length <=> fruit1.length }

# you can do this too: fruits.sort

# example 4 sort by length
puts fruits.sort_by {|fruit| fruit.length }

puts fruits.sort_by {|fruit| fruit.reverse } 

# example 5
puts fruits

puts fruits.sort! {|fruit1,fruit2| fruit1.length <=> fruit2.length }

puts fruits

# example 6

puts hash ={"c" => 222, "a" => 555, "d" => 111, "b" => 333}

puts hash.to_a

# it will sort by keys
puts hash.sort {|item1,item2| item1[0] <=> item2[0] } 

# it will sort by values
puts hash.sort {|item1,item2| item1[1] <=> item2[1] }