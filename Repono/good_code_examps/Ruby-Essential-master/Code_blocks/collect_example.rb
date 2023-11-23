# collect method example

array =[1,2,3,4,5]
puts array

# example1
array.collect {|i| i + 1}
puts array

# example2
array.collect {|i| 1 * 40 }
puts array

# example3
puts ['apple', 'banana', 'orange'].map {|fruit| fruit.capitalize }

# example4
puts ['apple', 'banana', 'orange'].map {|fruit| fruit.capitalize if fruit =='banana' }

#let do above example 4 in another way

['apple', 'banana', 'orange'].map do |fruit|
    if fruit =='banana'
       fruit.capitalize
    else
       fruit
    end
 end 
 
 # example 5
 puts (1..20).collect {|num| num * 20 }
 
 # example6
 puts hash = {"a" => 111, "b" => 222, "c" => 333 }
 puts hash.map {|k,v| k }
 
 puts hash.map {|k,v| v * 20 } 
 
 puts hash.map {|k,v| "#{k}: #{v * 20}" }
 