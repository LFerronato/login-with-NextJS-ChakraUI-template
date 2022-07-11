import { Flex, FlexProps } from '@chakra-ui/react'

export const Layout = ({ children, ...rest }: FlexProps) => {
  return (
    <Flex justify="center" align="center" h="100vh"
      bgImage="/bg-login.png"
      bgPosition="center"
      {...rest}
    >
      {children}
    </Flex>
  )
}
