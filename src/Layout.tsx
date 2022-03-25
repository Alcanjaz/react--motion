import { Box, Flex, Stack } from "@chakra-ui/react";
import {ReactNode} from "react";
import Navbar from "./Components/Navbar";

interface Props {
  children: ReactNode
}

export default function Layout({children}: Props) {
  return (
    <Stack height="100vh">
      <Navbar />
      <Box>
        <Flex mt={20} alignItems="center" justifyContent="center">
          {children}
        </Flex>
      </Box>
    </Stack>
  ) 
};