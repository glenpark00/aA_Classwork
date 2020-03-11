class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if !include?(key)
      self[key] << key
      @count += 1
    end
    resize! if count == num_buckets
  end
  
  def include?(key)
    self[key].include?(key)
  end
  
  def remove(key)
    if include?(key)
      self[key].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[num.hash % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    elements = @store.flatten
    @store = Array.new(num_buckets * 2) { Array.new }
    @count = 0
    elements.each { |ele| insert(ele) }
  end
end
