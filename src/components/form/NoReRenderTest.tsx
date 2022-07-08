import { useEscolaFormStore } from "components/form/useFormStore"

export const NoReRenderTest = () => {

  const list = useEscolaFormStore(s => s.list)
  return (
    <p>
      {JSON.stringify(list)}
      {/* {JSON.stringify(form)} */}
    </p>
  )
}
