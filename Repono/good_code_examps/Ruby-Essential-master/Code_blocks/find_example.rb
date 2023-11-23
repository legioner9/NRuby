# find example

 # each number will puts into |i| as it iteratees through set. if i=5 then it will return it 
puts (1..10).find {|i| i==5} 

# find return the first value only .
puts (1..10).find {|i| i % 3 ==0}

# detect is just like find . detect is return the single object
puts (1..10).detect {|i| i% 3 == 0}

#detect is return nil 
puts (1..10).find {|i| i==20 }

# find_all return the result in array (returns all the objects that match)
puts (1..10).find_all {|i| i % 3 ==0}

# this gives an empty array 
puts (1..10).find_all {|i| i % 30 ==0}

# select is just like find_all
puts (1..10).select {|i| (1..10).include?(i * 3) }

# are there is any in the set . it will return a boolean
puts (1..10).any? {|i| i % 3 ==0}

# are all of them meets this requirement. return in boolean true/false
puts (1..10).all? {|i| i % 3 ==0}

# delete the values from array if it is match
puts [*1..10].delete_if {|i| i % 3 ==0}