import { Form } from 'components/form/Form'
import { NoReRenderTest } from 'components/form/NoReRenderTest'
import type { NextPage } from 'next'

const FormPage: NextPage = () => {
  return (
    <>
      <Form />

      <hr style={{ margin: 10 }} />

      <NoReRenderTest />
    </>
  )
}

export default FormPage
