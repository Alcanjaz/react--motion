export type Todo = {
  id: string,
  description: string,
  completed: boolean
}

export const todos: Todo[] = [
  {id: 'asjkajskajs', description: 'Learn Chakra', completed: true},
  {id: 'hakjshkjahs', description: 'Learn Framer Motion', completed: true},
  {id: 'ahsjhaskhakj', description: 'Learn Redux', completed: false},
]