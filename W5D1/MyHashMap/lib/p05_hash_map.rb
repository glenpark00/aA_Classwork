require_relative 'p04_linked_list'

class HashMap
  attr_accessor :count
  include Enumerable

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { LinkedList.new }
    @count = 0
  end

  def include?(key)
    @store[key.hash % num_buckets].include?(key)
  end
  
  def set(key, val)
    if @store[key.hash % num_buckets].include?(key)
      delete(key)
    end
    @store[key.hash % num_buckets].append(key, val)
    @count += 1
  end

  def get(key)
    if self.include?(key)
      @store[key.hash % num_buckets].get(key)
    else
      nil
    end
  end
  
  def delete(key)
    if self.include?(key)
      @store[key.hash % num_buckets].remove(key)
      @count -= 1
    else
      nil
    end
  end

  def each
    @store.each { |bucket| bucket.each {|node| yield (node) }}
  end

  # uncomment when you have Enumerable included
  def to_s
    pairs = inject([]) do |strs, (k, v)|
      strs << "#{k.to_s} => #{v.to_s}"
    end
    "{\n" + pairs.join(",\n") + "\n}"
  end

  alias_method :[], :get
  alias_method :[]=, :set

  private

  def num_buckets
    @store.length
  end

  def resize!
  end

  def bucket(key)
    # optional but useful; return the bucket corresponding to `key`
  end
end
