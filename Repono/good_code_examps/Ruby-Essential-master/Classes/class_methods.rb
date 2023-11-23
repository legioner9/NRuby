 class Animal
     attr_accessor :name
     attr_writer :color
     attr_reader :legs, :arms
     
     # create a class method with keyword self
     # array of species
     def self.all_species
         ['cat', 'cow','dog','duck', 'horse','pig']
     end 
     
     def self.create_with_attributes(noise, color)
         animal = self.new(noise)
         animal.color = color
         return animal
     end
     
     def initialize(noise, legs=4, arms=0)
         @noise = noise
         @legs = legs
         @arms = arms
         puts "A new animal has been instantiated"
     end 
         
     def noise=(noise)
         @noise=noise
     end
     
     def noise
         @noise
     end
     
     def color
         "the color is #{@color}."
     end
 end

# call array of all_species without creating an object
puts Animal.all_species
# using inspect
puts Animal.all_species.inspect
animal2 = Animal.create_with_attributes("Quack!","white")
puts animal2.noise
puts animal2.color
     
# creating and initialising object     
animal1 = Animal.new("Moo!", 6, 2) # initialize the values
animal1.name= "Steve"  # set the name
puts animal1.name   # retrieve the name
animal1.color= "Black"  # set the color
puts animal1.color  # retrieve the color value
puts animal1.legs   # retrieve the legs and arms
puts animal1.noise  # retrieve the noise value       

