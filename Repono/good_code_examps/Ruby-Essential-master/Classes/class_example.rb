# create a class
class Animal
     def make_noise
         "Moo!"
     end
 end

 # create new object of a class "Animal"
animal1 = Animal.new  # 1st instance
puts animal1.make_noise

animal2 = Animal.new  # 2nd  instance
puts animal2.make_noise.upcase

