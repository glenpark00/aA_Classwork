def my_min1(nums) # O(n^2)
  smallest = 0
  nums.each do |num|
    cur_smallest = 0
    nums.each do |num2|
      cur_smallest = num2 if num2 < cur_smallest
    end
    smallest = cur_smallest if cur_smallest < smallest
  end
  smallest
end

list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]
# p my_min1(list)  # =>  -5

def my_min_2(nums) # O(n)
  smallest = 0
  nums.each do |num|
    smallest = num if num < smallest
  end
  smallest
end
# p my_min_2(list)  # =>  -5

# def largest_contiguous_subsum(arr) # O(n^3)
#   subsets = []
#   arr.each_with_index do |ele1, i1|
#     arr.each_with_index do |ele2, i2|
#       if i2 >= i1
#         subsets << arr[i1..i2]
#       end
#     end
#   end
#   subsets.max_by { |subset| subset.sum }.sum
# end

def largest_contiguous_subsum(arr) # O(2n) => O(n)
  max = arr.min
  curr_sum = 0
  (0...arr.length).each do |i|
    curr_sum += arr[i] # -5
    if curr_sum > max
      max = curr_sum
    elsif curr_sum < 0
      curr_sum = 0
    end
  end
  max
end

list = [5, 3, -7]
p largest_contiguous_subsum(list) # => 8

list = [2, 3, -6 , 7, -6, 7]
p largest_contiguous_subsum(list) # => 8 (from [7, -6, 7])

list = [-5, -1, -3]
p largest_contiguous_subsum(list) # => -1 (from [-1])


list = [5, 2, -7, 1]
p largest_contiguous_subsum(list) # => 7 (from [5, 2])

