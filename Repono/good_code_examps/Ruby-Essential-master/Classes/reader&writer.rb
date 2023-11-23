class Colour
    # set the reader or we can say: set the value
    def color=(color)
       @color = color
    end
    
    # set the writer or we can say retrieve the value
    def color
       @color
    end 
end

color1 = Colour.new
color1.color = "Red"
puts color1.color

color2 = Colour.new
color2.color = "Blue"
puts color2.color