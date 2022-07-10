import { useEscolaStore } from "components/initialTestes/stores/useEscolaStore"

export const ButtonEscola = () => {
  const { increasePopulation, removeAllBears } = useEscolaStore()

  return (
    <>
      <button onClick={() => increasePopulation()}>Add</button>
      <button onClick={() => removeAllBears()}>Reset</button>
    </>
  )
}
