#!/usr/bin/env ruby

require 'digest'

def created_at(path)
  fs = File::Stat.new(path)
  fs.ctime
end

def duplicates(path, times = {}, paths = {}, dups = [])
  entries = Dir["#{ path }/*"]
  entries.each do |f|
    if File.directory?(f)
      duplicates(f, times, paths, dups)
    else
      md5 = Digest::MD5.file(f).hexdigest
      time = created_at(f)
      if times[md5]
        if times[md5] < time
          dups << [f, paths[md5]]
        else
          times[md5] = time
          dups << [paths[md5], f]
        end
      else
        times[md5] = time
        paths[md5] = f
      end

    end
  end
  dups
end

puts duplicates('/Users/Gabriel/workspace/').inspect

