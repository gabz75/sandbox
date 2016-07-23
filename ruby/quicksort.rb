array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
array.shuffle!

def swap(array, a, b)
  tmp = array[a]
  array[a] = array[b]
  array[b] = tmp
end

def _quicksort(array, start, finish)
  if start >= finish
    return
  end

  pivot = array[start]
    free = start
  min = start
  max = finish

  # Current free slot


  while min < max
    if free == min # Evaluate array[max]
      if array[max] <= pivot # Smaller than pivot, must move
        array[free] = array[max]
        min += 1
        free = max
      else
        max -= 1
      end
    elsif free == max # Evaluate array[min]
      if array[min] >= pivot # Bigger than pivot, must move
        array[free] = array[min]
        max -= 1
        free = min
      else
        min += 1
      end
    else
      raise "Inconsistent state"
    end
  end
  array[free] = pivot

  # puts array[start..finish].inspect

  _quicksort(array, start, free - 1)
  _quicksort(array, free + 1, finish)
end

def quicksort(array)
  _quicksort(array, 0, array.size - 1)
end

puts array.inspect
puts "-"
puts "-"
puts quicksort(array)
puts array.inspect
