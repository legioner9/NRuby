begin
  if rand(2).zero?
    raise RuntimeError, 'Ошибка класса RuntimeError'
  else
    raise IOError, 'Ошибка класса IOError'
  end
rescue RuntimeError => e
  puts e.message
rescue IOError => e
  puts e.message
end
