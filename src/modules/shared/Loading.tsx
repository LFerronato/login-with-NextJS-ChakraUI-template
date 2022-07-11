import { CenterScreen } from "./base/CenterScreen"
import { Spinner } from '@chakra-ui/react'
import { parseCookies } from "nookies"
import { useAuthStore } from "modules/auth/useAuthStore"
import { useEffect } from "react"

export const Loading = () => {

  useEffect(() => {
    const cookieToken = parseCookies()['avasae.token']
    if (!cookieToken) {
      useAuthStore.setState({ authStatus: 'toLogin' })
    }
    if (cookieToken) {
      // validate token
      useAuthStore.setState({ authStatus: 'authenticated' })
    }
  }, [])
  return (
    <CenterScreen bg="black">
      <Spinner size="xl" color="white"/>
    </CenterScreen>
  )
}
