import { Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import TodoList from '../Components/TodoList'
import { todos } from '../utils/todos'

function TodosPage() {
  const appBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex 
      direction="column"
      backgroundColor={appBackground}
      p={12}
      rounded={6}
      >
      <Heading mb={6} textAlign="center">Todo App</Heading>
      <TodoList todos={todos}/>
    </Flex>
  )
}

export default TodosPage
