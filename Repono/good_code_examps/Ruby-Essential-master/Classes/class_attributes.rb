 class Animal
     attr_accessor :name
     attr_writer :color
     attr_reader :legs, :arms
     
     # class variables 
     # we are using for information which is general for the whole class 
     @@species = ['cat', 'cow','dog','duck', 'horse','pig']
     
     # class method
     def self.all_species
         @@species
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

puts Animal.all_species.inspect
     
# creating and initialising object     
animal= Animal.new("Moo!", 6, 2) # initialize the values
      

