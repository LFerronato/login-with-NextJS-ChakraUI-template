import { CheckCircleIcon, LockIcon } from '@chakra-ui/icons'
import { Flex, Button, Box, Divider } from '@chakra-ui/react'
import { InputGroup } from 'modules/shared/base/formElements/InputGroup'
import Image from 'next/image'
import SaeIcon from '../../../../public/logoIcon.svg'
import { useAuthStore } from '../useAuthStore'
import { Layout } from './layout'
import { useLoginStore } from './useLoginStore'

export const _LoginPage = () => {
  const { handleSubmit, errosMessage } = useLoginStore()
  const { token } = useAuthStore()

  return (
    <Layout>
      <Flex as="form" flexDirection="column" gap="8" align="center" m="4" maxW="container.sm"
        onSubmit={handleSubmit}
      >
        <Box mb="10">
          <Image src={SaeIcon} alt="SAE logo icon" height="90%" />
        </Box>

        <InputGroup placeholder='Username'
          isRequired
          isInvalid={!!errosMessage.username}
          name="username"
          autoComplete="username"
          leftIcon={<CheckCircleIcon color='gray.300' />}
        />
        <InputGroup placeholder='Password' type="password"
          isRequired
          isInvalid={!!errosMessage.password}
          name="password"
          autoComplete="current-password"
          leftIcon={<LockIcon color='gray.300' />}
        />

        <Button mt="4" variant="solid" bg="purple.600"
          w="100%"
          borderRadius="full"
          type="submit"
        >Log In</Button>
        <Divider />
        <p>Token: {token}</p>
      </Flex>

    </Layout>
  )
}
