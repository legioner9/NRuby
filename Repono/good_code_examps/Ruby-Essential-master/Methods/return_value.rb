
# Default return value is the last operation's return value
# (unless you explicitly return before it)

# example 1
def welcome(name="World")
    puts "let's try"
	return "Hello #{name}!"
	2 + 2
end

welcome
returned_value = welcome("John")
puts returned_value

# example 2

# methods return only one value
# return multiple values as array
def add_and_subtract(n1=0, n2=0)
	add = n1 + n2
	sub = n1 - n2
	return [add, sub]
end

result = add_and_subtract(2, 2)
puts result[0]
puts result[1]
add, sub = add_and_subtract(8, 3)

# or you can write it like this:
#  [add, sub] = add_and_subtract(8, 3)

# example 3

# Returning a value instead of outputting it from 
# inside a method can give you greater flexiblity.
def longest_word(words=[])
  longest_word = words.inject do |memo,word|
    memo.length > word.length ? memo : word
  end
  return longest_word
end


fruits = ['apple', 'pear', 'banana', 'plum']
puts longest_word(fruits).length

# example 4

# Return doesn't have to be at the end 
# and there can be more than one.
# Useful for conditional statements.
def over_five?(value=nil)
	return "Exactly 5" if value.to_i == 5
	if value.to_i > 5
		return "Over 5"
	else
		return "Under 5"
	end
end

puts over_five?(112 / 18)
