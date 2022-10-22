import { Box, Flex, Heading, IconButton, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react"
import {MoonIcon, SunIcon} from "@chakra-ui/icons"
import { Link } from "react-router-dom"

export default function Navbar() {
  const {toggleColorMode, colorMode} = useColorMode()
  const navBackground = useColorModeValue('gray.200', 'gray.700')

  return (
    <Box bg={navBackground} position="fixed" px={4} w="100%">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Link to="/">
          <Heading>Logo</Heading>
        </Link>
        <Flex alignItems="center">
          <Stack direction="row" spacing={7}>
            <IconButton aria-label="color mode" onClick={toggleColorMode} icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}/>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}