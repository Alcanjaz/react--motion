import { BrowserRouter, Route } from "react-router-dom";
import { AnimatedRoutes, RouteTransition } from "./Components/TransitionRoute";
import Layout from "./Layout";
import IndexPage from "./views/IndexPage";
import TodosPage from "./views/Todos";

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes initial={true}>
          <Route path="/" element={
            <RouteTransition slideUp={10}>
              <IndexPage />
            </RouteTransition>
          }/>
          <Route path="/todos" element={
            <RouteTransition slideUp={10}>
              <TodosPage />
            </RouteTransition>
          }/>
        </AnimatedRoutes>
      </Layout>
    </BrowserRouter>
  )
}