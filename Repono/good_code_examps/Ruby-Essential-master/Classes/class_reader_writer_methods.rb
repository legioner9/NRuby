 class Animal
     attr_accessor :name
     attr_writer :color
     attr_reader :legs, :arms
     
     @@species = ['cat','cow','dog','duck','horse','pig']
     @@current_animals =[]
     
     #class reader, class variable being return
     def self.species
        @@species
     end
     
     # class writer
     def self.species=(array=[])
         @@species = array
     end
     
     #class reader
     def self.current_animals
         @@current_animals
     end
     
     def self.create_with_attributes(noise, color)
         animal = self.new(noise)
         animal.color = color
         return animal
     end
     
     # initialize 
     def initialize(noise, legs=4, arms=0)
         @noise = noise
         @legs = legs
         @arms = arms
         puts "A new animal has been instantiated"
     end 
      
     # writer method
     def noise=(noise)
         @noise=noise
     end
     
     # reader method
     def noise
         @noise
     end
     
     # reader for color
     def color
         "the color is #{@color}."
     end
 end

# call class variables
Animal.species = ['frog','fish']
puts Animal.species.inspect  
# creating and initialising object     
animal= Animal.new("Moo!", 6, 2) 
animal.name="Steve"
puts animal.name
animal.color="red"
puts animal.color
puts animal.legs
puts animal.noise

animal1 = Animal.create_with_attributes("Quack!","white")
puts animal1.noise
puts animal1.color

