import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { Box, Button, Flex, Input } from '@chakra-ui/react'
import axios from 'axios'
import { setCookie } from 'nookies'
import { api } from 'services/api'

const HomePage: NextPage = () => {
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()
    const data = new FormData(e.target)
    const apiRes = await axios.post('https://apis.sae.digital/auth/login', {
      user: data.get('login'),
      pwd: data.get('senha'),
    })
    const token = apiRes.data.token
    console.log('token =>', token)
    // Set
    setCookie({}, 'token', token, {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    })
    // api.defaults.headers.patch['Authorization'] = 'Bearer ' + token

    Object.assign(api.defaults, {headers: {authorization: token}})
    router.push('/dash')
  }

  return (
    <Flex h="100vh" align="center" justify="center">
      <Box as="form" bg="green.800" p="6" m="2"
        onSubmit={handleSubmit}
      >
        <h3>Login</h3>
        <Input name="login" value="neyzar" />
        <Input name="senha" value="02UG@PX!c}.EWu]-TejS" />
        <Button type="submit">Fazer Login</Button>
      </Box>
    </Flex>
  )
}

export default HomePage
