class Integer
  # Integer#hash already implemented for you
end

class Array
  def hash
    int = 0
    self.each_with_index do |ele, i|
      int += (ele.hash + i).hash
    end
    int.hash
  end
end

class String
  def hash
    int = 0
    chars = ('a'..'z').to_a + ('A'..'Z').to_a
    arr = self.split('')
    arr.each_with_index do |char, i|
      int += 1 + chars.index(char) * i
    end
    int.hash
  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    int = 0
    self.each do |k,v|
      int += 2 + k.hash + v.hash
    end
    int.hash
  end
end
