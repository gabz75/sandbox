package main

import (
  "fmt"
  "os"
  "strconv"
)

func main() {
  if len(os.Args) != 2 {
    fmt.Println("invalid args")
    return
  }

  i, _  := strconv.Atoi(os.Args[1])
  fmt.Println(indexAtfiboIterative(i))
  fmt.Println(indexAtfiboRecursive(i))
}

func indexAtfiboIterative(j int)(int) {
  var x, y int = 0, 1
  var tmp int;
  for i := 1; i < j; i++ {
    tmp = x + y
    x = y
    y = tmp
  }

  return y
}

func indexAtfiboRecursive(i int)(int) {
  if i < 1 {
    return 0
  }

  if i < 2 {
    return 1
  }

  return indexAtfiboRecursive(i - 1) + indexAtfiboRecursive(i - 2)
}
