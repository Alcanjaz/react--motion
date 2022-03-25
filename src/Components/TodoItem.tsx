import { CheckIcon, CloseIcon } from "@chakra-ui/icons"
import { Container, Flex, IconButton } from "@chakra-ui/react"
import { useState } from "react"


type Props = {
  description: string,
  completed: boolean
}

export default function TodoItem({description, completed}: Props) {
  const [taskCompleted, setTaskCompleted] = useState(completed);
  return (
      <Flex alignItems="center" justifyContent={"space-around"} p={3} >
        <Container>
          {description}
        </Container>
        <IconButton aria-label="complete task" 
        onClick={() => setTaskCompleted(!taskCompleted)} 
        icon={taskCompleted ? <CheckIcon /> : <CloseIcon />}
        />
      </Flex>
  )
}