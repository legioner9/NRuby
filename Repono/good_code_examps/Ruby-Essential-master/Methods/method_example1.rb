# method example

# defining the method using def and end 
def welcome
    puts "Hello World!"
end 

# calling method with method name
welcome

# example 2
def add
    puts 1 + 1
end 

# calling add method
add

# example 3

def longest_word
    words= ['apple','pear','banana','plum']
    longest_word = words.inject do |memo,word|
        memo.length > word.length ? memo : word
    end
    puts longest_word
end

#calling longest_word
longest_word


#example 4
# methods names have questions marks in them
# useful for tests and boolens
def over_five?
    value =3
    puts value > 5 ? 'Over 5' : 'Not over 5'
end
    
# calling method
over_five?