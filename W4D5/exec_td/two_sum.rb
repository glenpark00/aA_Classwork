require 'byebug'
require 'set'
def two_sum?(arr, target_sum) # O(n^2)
  len = arr.length
  (0...len-1).each do |i|
    (i + 1...len).each do |j|
      return true if arr[i] + arr[j] == target_sum
    end
  end
  false
end


def two_sum?(arr, target_sum) # O(n log n)
  sorted = arr.sort
  sorted.each_with_index do |num, i|
    curr_target = target_sum - num
    bsearch(arr, curr_target, i+1)
  end
  false
end

def bsearch(arr, target, start=0, last=arr.length - 1)
  return nil if start == last
  mid = last / 2 
  case target <=> arr[mid]
  when -1
    bsearch(arr, target, 0,  mid - 1)
  when 1
    res = bsearch(arr, target, mid + 1, last)
    return false if res.nil?
  when 0
    return true 
  end
end

def two_sum?(arr,target_sum)
  set = arr.to_set # n
  arr.any? { |num| set.include?(target_sum - num) && (target_sum - num) != num }
end

arr1 = [0, 1, 2, 3, 4, 5, 7, 10] # first plus last is upper limit when targ < last
arr = [0, 1, 5, 7]
p two_sum?(arr1, 6) # => should be true
p two_sum?(arr1, 10) # => should be true
# debugger
p two_sum?(arr, 6) # => should be true
p two_sum?(arr, 10) # => should be false

