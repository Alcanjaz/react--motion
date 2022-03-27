import { Heading } from "@chakra-ui/react";
import { BrowserRouter, Link, Route } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "./Components/TransitionRoute";
import TodosPage from "./views/Todos";

export default function Routes() {
  return (
    <BrowserRouter>
      <AnimatedRoutes>
        <Route path="/" element={
          <RouteTransition slideUp={10}>
            <Heading>Welcome to main page!</Heading>
            <Link to="/todos">Check your todos now!</Link>
          </RouteTransition>
        }/>
        <Route path="/todos" element={
          <RouteTransition slideUp={10}>
            <TodosPage />
          </RouteTransition>
        }/>
      </AnimatedRoutes>
    </BrowserRouter>
  )
}