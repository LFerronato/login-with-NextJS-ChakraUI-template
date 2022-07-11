import {
  Input,
  InputGroup as ChakraInputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react'

type IProps = InputProps & { leftIcon?: JSX.Element }
export const InputGroup = ({ leftIcon, ...rest }: IProps) => {



  return (
    <ChakraInputGroup alignItems="center">
      {leftIcon &&
        <InputLeftElement pointerEvents='none' top="" left="0.5">
          {leftIcon}
        </InputLeftElement>
      }
      <Input
        bg="blackAlpha.700"
        borderRadius="full"
        py="6"
        _placeholder={{ color: 'gray.300' }}
        {...rest}
      />
    </ChakraInputGroup>
  )
}
