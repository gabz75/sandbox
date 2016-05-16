arr = []
(19).times { |n| arr << n }

needle = arr.sample

rotated_array = (arr.slice(needle + 1, arr.size) + arr.slice(0, needle)).flatten

words = [
  'engender',
  'karpatka',
  'othellolagkage',
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote', # <-- rotates here!
  'babka',
  'banoffee',
]

def rotation_index(array)
  start = 0
  finish = array.size - 1

  while start < finish
    if array[start] < array[finish]
      finish -= 1
    elsif array[start] > array[finish]
      start += 1
    end
  end

  finish
end

def rotation_index_log_n(array)
  return -1 if array.size < 1
  return 0 if array.size === 1

  middle = array.size / 2
  last = array[array.size - 1]

  if array[middle] > array[middle - 1]
    if array[middle] > last
      return middle + 1 + rotation_index_log_n(array.slice(middle + 1, array.size))
    else
      return rotation_index_log_n(array.slice(0, middle))
    end
  else
    return middle
  end
end

puts rotated_array.inspect
puts "rotation index is #{rotation_index(rotated_array)}"

index = rotation_index(words)
puts words.inspect
puts "rotation is #{words[index]}"

puts rotated_array.inspect
puts "rotation index is #{rotation_index_log_n(rotated_array)}"

index = rotation_index_log_n(words)
puts words.inspect
puts "rotation is #{words[index]}"
