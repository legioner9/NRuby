class Person
    # set the instance
    def set_speak(speak)
        # @speak is instance variable
        # speak is local variable
        @speak = speak 
    end 
    # retreive  the instance
    def can_speak
        @speak
    end
end

person1=Person.new
person1.set_speak("Hello!")
puts person1.can_speak


