 class Animal
     attr_accessor :name
     attr_writer :color
     attr_reader :legs, :arms
     
     def initialize(noise, legs, arms)
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

animal1 = Animal.new("Moo!", 4, 0) # initialize the values
animal1.name= "Steve"  # set the name
puts animal1.name   # retrieve the name
animal1.color= "Black"  # set the color
puts animal1.color  # retrieve the color value
puts animal1.legs   # retrieve the legs and arms
puts animal1.noise  # retrieve the noise value
         