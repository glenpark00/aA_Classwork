class Node
  attr_reader :key
  attr_accessor :val, :next, :prev

  def initialize(key = nil, val = nil)
    @key = key
    @val = val
    @next = nil
    @prev = nil
  end

  def to_s
    "#{@key}: #{@val}"
  end

  def remove
    # optional but useful, connects previous link to next link
    # and removes self from list.
  end
end

class LinkedList
  include Enumerable

  def initialize
    @head = Node.new(:head)
    @tail = Node.new(:tail)
    @head.next = @tail
    @tail.prev = @head
  end

  def [](i)
    each_with_index { |link, j| return link if i == j }
    nil
  end

  def first
    @head.next
  end

  def last
    @tail.prev
  end

  def empty?
    first == @tail
  end

  def get(key)
    self.each do |node|
      if node.key == key
        return node.val
      end
    end
    nil
  end
  
  def include?(key)
    self.each do |node|
      if node.key == key
        return true
      end
    end
    false
  end

  def append(key, val)
    guy = Node.new(key, val)
    last.next = guy
    guy.prev = last 
    @tail.prev = guy
    guy.next = @tail
  end

  def update(key, val)
    self.each do |node|
      if node.key == key
        node.val = val
        return
      end
    end
  end
  
  def remove(key)
    self.each do |node|
      if node.key == key
        previous = node.prev
        nextious = node.next
        previous.next = nextious
        nextious.prev = previous
        return
      end
    end
  end

  def each
    node = first
    until node == @tail
      yield node
      node = node.next
    end
    node
  end

  # uncomment when you have `each` working and `Enumerable` included
  def to_s
    inject([]) { |acc, link| acc << "[#{link.key}, #{link.val}]" }.join(", ")
  end
end
