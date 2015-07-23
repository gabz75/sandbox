# Temperature converter between Celsius, Kelvin and Fahrenheit
module Temperature
  class << self

    def convert(temperature, input_scale: 'celsius', output_scale: 'celsius')
      send("#{ input_scale }_to_#{ output_scale }", temperature)
    end

    private

    def celsius_to_fahrenheit(x)
      x * 1.80 + 32.00
    end

    def celsius_to_kelvin(x)
      x + 273.15
    end

    def fahrenheit_to_celsius(x)
      (x - 32.00) / 1.80
    end

    def fahrenheit_to_kelvin(x)
      (x - 32.00) * 5 / 9 + 273.15
    end

    def kelvin_to_fahrenheit(x)
      (x - 273.15) * 1.80 + 32.00
    end

    def kelvin_to_celsius(x)
      x - 273.15
    end

    def method_missing(_, *_)
      Float::NAN
    end

  end
end

puts Temperature.convert(0, input_scale: 'kelvin', output_scale: 'celsius')
puts Temperature.convert(393, input_scale: 'kelvin', output_scale: 'celsius')
puts Temperature.convert(400, input_scale: 'fahrenheit')
puts Temperature.convert(333, input_scale: 'fahrenheit', output_scale: 'kelvin')
puts Temperature.convert(333, input_scale: 'celsius', output_scale: 'celsius')
