import { useEscolaStore } from "components/homeTestes/stores/useEscolaStore"

export const ButtonEscola = () => {
  const { increasePopulation, removeAllBears } = useEscolaStore()

  return (
    <>
      <button onClick={() => increasePopulation()}>Add</button>
      <button onClick={() => removeAllBears()}>Reset</button>
    </>
  )
}
