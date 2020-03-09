def windowed_max_range(arr, window)
  current_max_range = 0
  (0..arr.length - window).each do |i|
    sliced = arr[i...i + window]
    range = sliced.max - sliced.min
    current_max_range = range if range > current_max_range
  end
  current_max_range
end

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
p windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
p windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
p windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8