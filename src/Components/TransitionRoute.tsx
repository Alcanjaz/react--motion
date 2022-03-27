import { AnimatePresence } from "framer-motion"
import { FC } from "react"
import { Routes, useLocation} from "react-router-dom"
import { MountTransition } from "./MountTransition"

type Props = {
  slide?: number
  slideUp?: number
}

type RoutesProps = {
  exitBeforeEnter?: boolean,
  initial?: boolean
}

export const RouteTransition:FC<Props> = ({
  children,
  slide = 0,
  slideUp = 0,
}) => (
    <MountTransition slide={slide} slideUp={slideUp}>
      {children}
    </MountTransition>
)

export const AnimatedRoutes:FC<RoutesProps> = ({
  children,
  exitBeforeEnter = true,
  initial = false
}) => {
  const location = useLocation()
  
  return(
    <AnimatePresence exitBeforeEnter={exitBeforeEnter} initial={initial}>
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  )
}