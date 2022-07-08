import { useEscolaStore } from "components/homeTestes/stores/useEscolaStore"

export const Part1GroupStatus = () => {
  const { group } = useEscolaStore()
  return (
    <p>group: {String(group)}</p>
  )
}
