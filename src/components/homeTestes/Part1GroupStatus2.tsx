import { useEscolaStore } from "components/homeTestes/stores/useEscolaStore"

export const Part1GroupStatus2 = () => {
  const group = useEscolaStore(state => state.group)
  return (
    <p>group: {String(group)}</p>
  )
}
