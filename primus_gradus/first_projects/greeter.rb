# frozen_string_literal: true
class Greeter
  attr_accessor :names
  def initialize(name = 'World')
    @name = name
  end
  def say_hi
    puts "Hi #{@name}!"
  end
  def say_bye
    puts "Bye #{@name}, come back soon."
  end
end

puts gr = Greeter.new("Pat") #<Greeter:0x00007f3749294aa0>
gr.say_hi
gr.say_bye
puts Greeter.instance_methods false
puts gr.respond_to?("say_hi")
puts gr.respond_to?("name=")
puts gr.name
gr.name="Beth"
puts gr.name
