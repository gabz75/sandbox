package main

import (
  "fmt"
  "errors"
)



func main() {
  var stack Stack = Stack{}

  stack.Push(19)
  stack.Push(10)
  stack.Push(11312)

  fmt.Println(stack.Pop())
  fmt.Println(stack.Pop())
  fmt.Println(stack.Pop())
  fmt.Println(stack.Pop())
}

type Stack struct {
  queue []int
  length int
  current int
}

func (stack *Stack) Push(i int) {
  if stack.current >= stack.length {
    stack.expand()
  }

  stack.queue[stack.current] = i
  stack.current = stack.current + 1
}

func (stack *Stack) Pop() (int, error) {
  if stack.current <= 0 {
    return -666, errors.New("stack was empty")
  }
  stack.current = stack.current - 1

  return stack.queue[stack.current], nil
}


func (stack *Stack) expand() {
  if stack.length == 0 {
    stack.length = 1
  }

  stack.length = stack.length * 2
  var emptyStack []int = make([]int, stack.length)

  for i := 0; i < len(stack.queue); i ++ {
    emptyStack[i] = stack.queue[i]
  }
  stack.queue = emptyStack
}

