=begin
syntax for unless:

case test_value
when value
..
when value
..
else
..
end

=end

x=1
case
when x == 0
  puts "x is 0"
when x == 1
  puts "x is 1"
when x == 2
  puts "x is 2"
else
  puts "x is not 0, 1, or 2"
end