import { Flex, FlexProps } from '@chakra-ui/react'
import { cloneElement } from 'react'

export const FlexCol = ({ children, ...rest }: FlexProps) => {
  return cloneElement<FlexProps>(
    <Flex />,
    { flexDirection: 'column', ...rest },
    children
  )
}
