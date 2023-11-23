# merge example

h1 = { "a" => 111, "b" => 222 }

h2 = { "b" => 111, "c" => 222 }

puts h1.merge(h2)

puts h2.merge(h1)

puts h1.merge(h2) { |key,old,new| new }

puts h1.merge(h2) { |key,old,new| old }

puts h1.merge(h2) { |key,old,new| old * 2 }

h1.merge(h2) do |key, old,new|
    if old<new
        puts old
    else
        puts new
    end
end

puts h1.merge(h2) {|k,o,n| o < n ? o : n}

h1.merge!(h2)