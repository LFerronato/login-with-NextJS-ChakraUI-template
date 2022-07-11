import { _LoginPage } from 'modules/auth/login/_LoginPage'
import { HTMLHead } from 'modules/shared/HTMLHead'

const LoginPage = () => {
  console.log('+ [LoginPage]');
  return (
    <>
      <HTMLHead title='Login' />
      <_LoginPage />
    </>
  )
}

export default LoginPage
