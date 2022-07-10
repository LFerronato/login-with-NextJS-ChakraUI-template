import { useEscolaStore } from "components/initialTestes/stores/useEscolaStore"
import { ButtonEscola } from "./ButtonEscola"
import { Part1Content } from "./Part1Content"
import { Part1GroupStatus } from "./Part1GroupStatus"

export const Part1 = () => {
  const { increasePopulation, removeAllBears } = useEscolaStore()

  return (
    <div>
      Store 1
      <Part1Content />
      <Part1GroupStatus />
      <button onClick={() => increasePopulation()}>Add</button>
      <button onClick={() => removeAllBears()}>Reset</button>
      <hr />
      <p>usando um component externo, sem contexto...</p>
      <ButtonEscola />
    </div>
  )
}
