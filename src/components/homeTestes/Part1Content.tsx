import { useEscolaStore } from "components/homeTestes/stores/useEscolaStore"

export const Part1Content = () => {
  const store1 = useEscolaStore()
  
  return (
    <p>{store1.bears}</p>
  )
}
