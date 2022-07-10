import { useEscolaStore2 } from "components/homeTestes/stores/useEscolaStore2"
import { Part1GroupStatus } from "./Part1GroupStatus"
import { Part1GroupStatus2 } from "./Part1GroupStatus2"
import { Part2Main } from "./Part2Main"

export const Part2 = () => {
  return (
    <div>
      <Part2Main />
      <hr />
      <Part1GroupStatus />
      <Part1GroupStatus2 />
    </div>
  )
}
