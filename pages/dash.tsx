import { _DashPage } from 'modules/dash/_DashPage'
import { HTMLHead } from 'modules/shared/HTMLHead'

const DashPage = () => {
  console.log('+ [DashPage]');
  
  return (
    <>
      <HTMLHead title='Dash' />
      <_DashPage />
    </>
  )
}

export default DashPage
