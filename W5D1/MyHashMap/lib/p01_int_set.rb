class MaxIntSet
  attr_reader :store, :max

  def initialize(max)
    @max = max 
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if num < 0 || num > max
    @store[num] = true
  end

  def remove(num)
    raise "Out of bounds" if num < 0 || num > max
    @store[num] = false
  end

  def include?(num)
    raise "Out of bounds" if num < 0 || num > max
    @store[num]
  end

  private

  def is_valid?(num)
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num] << num if !self.include?(num)
  end

  def remove(num)
    self[num].delete(num) if self.include?(num)
  end

  def include?(num)
    self[num].include?(num)
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end
  
  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count
  
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end
  
  def insert(num)
    if !self.include?(num)
      self[num] << num
      @count += 1
    end
    resize! if count == num_buckets
  end
  
  def remove(num)
    if self.include?(num)
      self[num].delete(num)
      @count -= 1
    end
  end
  
  def include?(num)
    self[num].include?(num)
  end
  
  private
  
  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num % num_buckets]
  end
  
  def num_buckets
    @store.length
  end

  def resize!
    elements = @store.flatten
    @store = Array.new(num_buckets * 2) { Array.new }
    @count = 0
    elements.each {|ele| insert(ele)}
  end
end
