require 'pp'
require 'pry'

class Hi
  def greet
    puts "Hello!"
  end
end

Hi.new.greet
puts 5+2
puts 5.+(2)
puts 'Hi' 'man'; p 'Hi'
p 3
p "3"
puts 3.inspect # p 3
puts "3".inspect # p '3'

puts 'vsdf\'vdsf'

print "vsef\nvwe\n"