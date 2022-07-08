import { useEscolaStore2 } from "components/homeTestes/stores/useEscolaStore2"
import { Part1GroupStatus } from "./Part1GroupStatus"

export const Part2 = () => {
  const store2 = useEscolaStore2()
  return (
    <div>
      Store 2!
      <p>{store2.bears}</p>
      <button onClick={() => store2.increasePopulation()}>Add</button>
      <button onClick={() => store2.removeAllBears()}>Reset</button>
      <hr />
      <Part1GroupStatus />
    </div>
  )
}
