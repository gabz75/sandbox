arr = []
(rand(100) + 1).times { |n| arr << n + 1 }

needle = arr.sample

def index_of(array, value)
    return -1 if array.size <= 0
    return 0 if array.size == 1 && array[0] == value

    middle = array.size / 2
  if array[middle] === value
        return middle
    elsif array[middle] < value
        return middle + 1 + index_of(array.slice(middle + 1, array.size), value)
    elsif array[middle] > value
        return index_of(array.slice(0, middle), value)
    end
end

puts arr.inspect
puts "#{needle} is at index #{index_of(arr, needle)}"
