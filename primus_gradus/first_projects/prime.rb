def is_prime?(num)
    return false if num < 2
    (2..Math.sqrt(num)).none? { |i| (num % i).zero?}
end

puts is_prime?(7)