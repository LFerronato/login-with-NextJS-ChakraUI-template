import { Button } from '@chakra-ui/react'
import { useAuthStore } from 'modules/auth/useAuthStore'
import { CenterScreen } from 'modules/shared/base/CenterScreen'

export const _DashPage = () => {
  const singOut = useAuthStore(s => s.signOut)
  return (
    <CenterScreen>
      <h1>Dashboard!! </h1>
      <Button onClick={singOut}>LogOut</Button>
    </CenterScreen>
  )
}
