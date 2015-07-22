package main

import (
  "fmt"
  "bytes"
  "os"
)

func main() {
  if len(os.Args) < 2 {
    fmt.Println("invalid args")
    return
  }

  for i := 0; i < len(os.Args[1:]); i++ {
    fmt.Println(reverse(os.Args[1:][i]))
  }
}

func reverse(s string)(string) {
  var buffer bytes.Buffer

  for i := len(s) - 1; i >= 0; i-- {
    buffer.WriteString(string(s[i]))
  }

  return buffer.String()
}
