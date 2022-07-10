import { useEscolaStore } from "components/initialTestes/stores/useEscolaStore"

export const Part1Content = () => {
  const store1 = useEscolaStore()
  
  return (
    <p>{store1.bears}</p>
  )
}
