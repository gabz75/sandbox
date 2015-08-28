#!/usr/bin/env ruby

require 'json'

begin
  json = JSON.parse($stdin.read)
  puts JSON.pretty_generate(json)
rescue JSON::ParserError
  puts "invalid input"
end
