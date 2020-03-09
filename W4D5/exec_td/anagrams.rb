# def anagram?(str1,str2) # n! * n # 1
#   str1.chars.permutation.to_a.map(&:join).include?(str2)
# end

# p first_anagram?("gizmo", "sally")    #=> false
# p first_anagram?("elvis", "lives")    #=> true

# def anagram?(str1,str2) # 2 O(n * m)
#   copy = str2.chars
#   str1.each_char do |char|
#     char_i = copy.index(char)
#     return false if char_i.nil?
#     copy.delete_at(char_i)
#   end
#   copy.empty?
# end


# def anagram?(str1, str2) # 3 O(n log n)
#   str1_sort = str1.chars.sort
#   str2_sort = str2.chars.sort
#   str1_sort == str2_sort
# end


def anagram?(str1, str2) # 3 O(n + m)
  hash = Hash.new(0)
  str1.each_char { |char| hash[char] += 1 } # n 
  str2.each_char { |char| hash[char] -= 1 } # m
  hash.values.all? { |val| val == 0 } # n + m in the worst case
end 

p anagram?("elvis", "lives")    #=> true
p anagram?("gizmo", "sally")    #=> false
