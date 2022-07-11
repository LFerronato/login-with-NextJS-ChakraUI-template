import create from 'zustand'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { setCookie, parseCookies, destroyCookie } from 'nookies'


interface IP {
  token: string
  authStatus: 'initial' | 'authenticated' | 'toLogin'
  signIn(login: string, pwd: string): void
  signOut(): void
}
// eslint-disable-next-line no-unused-vars
export const useAuthStore = create<IP>((set) => ({
  token: '',
  authStatus: 'initial',

  signIn: (login, pwd) => {
    console.log('[singIn]', login, pwd)
    const newToken = 'ey_tudo-certo!'
    setCookie(undefined, 'avasae.token', newToken, {
      maxAge: 60 * 60 * 24 * 30, // 30 dias
      path: '/', // quais rotas terão acesso - '/'=todas
    })
    return set({ token: newToken })
  },

  signOut: () => {
    console.log('useAuthStore => signOut')
    destroyCookie({}, 'avasae.token', { path: '/' })
    set({ token: '' })
  },
}))

// export const handleLogout = () => 
