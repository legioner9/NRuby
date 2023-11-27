require 'optparse'

parser = OptionParser.new

parser.on('-x','Whether to x') do |value|
  p ['x', value]
end

p parser.parse!