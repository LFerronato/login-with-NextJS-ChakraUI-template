import { useEscolaStore } from "components/initialTestes/stores/useEscolaStore"

export const Part1GroupStatus = () => {
  const { group } = useEscolaStore()
  return (
    <p>group: {String(group)}</p>
  )
}
