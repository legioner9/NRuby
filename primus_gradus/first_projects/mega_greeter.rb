# frozen_string_literal: true

class MegaGreeter
  attr_accessor :names

  def initialize(name = "World")
    @names = name
  end

  def say_hi
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("each")
      # @names is a list of some kind, iterate!
      @names.each { |name| puts "Hello #{name}!"  }
    else
      puts "Hello #{names}!"
    end
  end

  def say_bye
    if @names.nil?
      puts "..."
    elsif @names.respond_to? "join"
      # Join the list elements with commas
      puts "Goodbye #{@names.join ", "}. Come back soon!"
    else
      puts "Goodbye #{@names}. Come back soon!"
    end
  end

end

def say(mg)
  mg.say_hi
  mg.say_bye
end

if __FILE__ == $0
  mg = MegaGreeter.new
  say mg

  mg.names="Xamer"
  say mg

  mg.names=["ergew","cerfwe","cerw"]
  say mg

  mg.names=nil
  say mg
end