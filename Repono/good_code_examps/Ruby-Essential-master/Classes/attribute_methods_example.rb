 class Animal
     attr_accessor :name
     attr_writer :color
     attr_reader :legs, :arms
    
     # make a writer for legs and arms
    def setup_limbs
         @legs = 4
         @arms = 0
     end 

     # writer method
     def noise=(noise)
         @noise=noise
     end
     
    # writer method   
     def noise
         @noise
     end
     
     # reader method
     def color
         "the color is #{@color}."
     end
 end

animal1 = Animal.new
animal1.setup_limbs  # calling writer method
animal1.noise="Moo!"
puts animal1.noise
animal1.name= "Steve"
puts animal1.name
animal1.color="Black"
puts animal1.color
puts animal1.legs