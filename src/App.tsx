import { Flex, FlexProps, Heading, useColorModeValue } from '@chakra-ui/react'
import {motion, Variants} from 'framer-motion'
import TodoList from './Components/TodoList'
import { todos } from './utils/todos'

const MotionFlex = motion<FlexProps>(Flex);

const variants: Variants = {
  show: {
    transition:{
      delay: 0.2,
    },
      y:0,
      opacity: 1
  },
  hidden: {
    y: 15,
    opacity: 0,
  }
}

function App() {
  const appBackground = useColorModeValue("gray.100", "gray.700")

  return (
    <MotionFlex 
      direction="column"
      backgroundColor={appBackground}
      p={12}
      rounded={6}
      variants={variants}
      initial="hidden"
      animate="show"
      >
      <Heading mb={6} textAlign="center">Todo App</Heading>
      <TodoList todos={todos}/>
    </MotionFlex>
  )
}

export default App
