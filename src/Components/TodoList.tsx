import { List, ListItem, ListProps, ListItemProps } from "@chakra-ui/react"
import TodoItem from "./TodoItem"
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { Todo } from "../utils/todos";

const MotionItem = motion<ListItemProps>(ListItem);
const MotionList = motion<ListProps>(List);

type Props = {
  todos: Todo[]
}

const list: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.5
    }
  }
}

const item: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}
export default function TodoList ({todos}: Props) {

  return (
    <AnimatePresence>
      <MotionList variants={list} initial="hidden" animate="show">
        {todos.map((todo) => (
          <MotionItem key={todo.id} variants={item} >
              <TodoItem {...todo} />
          </MotionItem>
        ))}
      </MotionList>
    </AnimatePresence>
  )
}