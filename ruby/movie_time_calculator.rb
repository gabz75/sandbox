def can_watch_two_movies(flight_length, movie_lengths)
  remaining_time = flight_length

  potentation_second_movies_length = {}

  movie_lengths.each do |first_movie_length|
    remaining_time_for_second_movie = flight_length - first_movie_length
    if potentation_second_movies_length[remaining_time_for_second_movie]
      return [first_movie_length, remaining_time_for_second_movie]
    else
      potentation_second_movies_length[first_movie_length] = 1
    end
  end

  []
end

def can_watch_two_movies_with_padding(flight_length, movie_lengths, padding = 20)
  remaining_time = flight_length

  potentation_second_movies_length = {}
  potentation_second_movies_length_with_padding = {}

  movie_lengths.each do |first_movie_length|
    remaining_time_for_second_movie = flight_length - first_movie_length
    remaining_time_for_second_movie_with_padding = flight_length - padding - first_movie_length
    if potentation_second_movies_length[remaining_time_for_second_movie]
      return [first_movie_length, remaining_time_for_second_movie]
    elsif potentation_second_movies_length_with_padding[remaining_time_for_second_movie_with_padding]
      return [first_movie_length, remaining_time_for_second_movie_with_padding]
    else
      potentation_second_movies_length[first_movie_length] = 1
      potentation_second_movies_length_with_padding[first_movie_length] = 1
    end
  end

  []
end

movie_lengths = [45, 5, 85, 60, 65, 25]
flight_length = 90

puts can_watch_two_movies(flight_length, movie_lengths).inspect

movie_lengths = [45, 25, 61, 125, 25]
puts can_watch_two_movies_with_padding(flight_length, movie_lengths).inspect

