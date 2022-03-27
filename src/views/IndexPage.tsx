import { Flex, Heading, Link } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";


export default function IndexPage() {
  return (
    <Flex direction="column">
      <Heading>Welcome to main page!</Heading>
      <Link as={ReachLink} to="/todos" w={"auto"}>
        You can check your todos here!
      </Link>
    </Flex>
  )
}