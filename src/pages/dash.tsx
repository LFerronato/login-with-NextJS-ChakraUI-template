import { useEffect, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import { Box, Button, Spinner } from '@chakra-ui/react'
import { destroyCookie, parseCookies } from 'nookies'
import { useRouter } from 'next/router'
import { api } from 'services/api'

// export const getServerSideProps: GetServerSideProps = async () => {
//   const token = parseCookies()['token']
//   if (!token) return { redirect: { destination: '/login', permanent: true } }

//   // api.post('/auth/validate-token', { token })
//   const nome = 'Lucas'

//   return {
//     props: { nome }
//   }
// }

const DashPage: NextPage = () => {
  const router = useRouter()
  const [schedules, setSchedules] = useState([])
  const [ isValidated, setIsValidated ] = useState(false)

  useEffect(() => {
    api.get('/ava/schedules')
      .then(resp => {
        setSchedules(resp.data)
        setIsValidated(true)
      })
      .catch(err => {
        console.log('err =>', err.response.data)
        if (err.status === 401 || !err.response.data?.auth) {
          router.push('/login')
        }
      })
  }, [])

  if(!isValidated) {
    return <Spinner />
  }

  return (
    <Box>
      <h1>Dashboard</h1>
      <p>Qtd Agendamentos: {schedules.length}</p>

      <Button onClick={() => {
        destroyCookie({}, 'token', { path: '/' })
        router.push('/login')
      }}>Sair</Button>
    </Box>
  )
}

export default DashPage
