import { useEscolaStore2 } from './stores/useEscolaStore2'

export const Part2Main = () => {
  const store2 = useEscolaStore2()
  return (
    <div>
      Store 2!
      <p> {store2.bears}</p>
      <button onClick={() => store2.increasePopulation()}>Add</button>
      <button onClick={() => store2.removeAllBears()}>Reset</button>
    </div>
  )
}
