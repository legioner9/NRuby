p [1, 2, 3, 4, 5].reduce { |m, x| m * x } # 120
p [1, 2, 3, 4, 5].reduce(&:*)             # 120
p [1, 2, 3, 4, 5].reduce(:*)              # 120
