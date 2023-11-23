# default arguments example

def welcome(name="World")
    puts"Hello #{name}"
end 

# calling method
welcome
welcome("Mary")

# example 2

def add(n1=0, n2=0)
    puts n1 + n2
end 

add(3,7)
add
add(4)



# example  3
fruits= ['apple','pear','banana','plum']

# pass the empty array
def longest_word(words=[])
    longest_word = words.inject do |memo,word|
        memo.length > word.length ? memo : word
    end
    puts longest_word
end

#calling longest_word
longest_word(fruits)
longest_word

#example 
def over_five?(value=nil)
    puts value.to_i > 5 ? 'Over 5' : 'Not over 5'
end
    
# calling over_five? method with one parameter
over_five?(10)
over_five?