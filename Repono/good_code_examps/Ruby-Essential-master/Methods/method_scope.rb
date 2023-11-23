# variable scope examples

# global scope
value=7

def over_five?
    value =3 # scope of value=3 is within this method not outside of method
    puts "inside the method: #{value}"
    puts value > 5 ? 'Over 5' : 'Not over 5'
end

puts "outside the method/block: #{value}"
# calling method
over_five?

# example 2



def longest_word
    words= ['apple','pear','banana','plum']
    longest_word = words.inject do |memo,word|
        memo.length > word.length ? memo : word
    end
    puts longest_word
end

#calling longest_word
longest_word


# let's print the longest_word value from the method 
#  this one : longest_word = words.inject do |memo,word|

puts longest_word

# the result will same 
# because both method name and local variable inside method is same
# betetr to use different names (method name and variable name)
