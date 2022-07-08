import { useEscolaStore } from "contexts/useEscolaStore"

export const ButtonEscola = () => {
  const d = useEscolaStore()

  return (
    <>
      <button onClick={() => d.increasePopulation()}>Add</button>
      <button onClick={() => d.removeAllBears()}>Reset</button>
    </>
  )
}
