=begin
or/or-equals operator:syntax

unless x
x=y
end
is same as 
x || = y 
it means if x has a value then leave it alone 
but if not , then we will set x=y
=end

x=1
y= nil
z=2

puts "example1"
x=y || z
puts "the value of x is #{x}"
puts "the value of y is #{y}"
puts "the value of z is #{z}"

puts "example2"
x ||= y
puts "the value of x is #{x}"
puts "the value of y is #{y}"
   

    