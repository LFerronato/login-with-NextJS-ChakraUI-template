import { ButtonEscola } from 'components/ButtonEscola'
import { useEscolaStore } from 'contexts/useEscolaStore'
import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  const d = useEscolaStore()
  
  return (
    <div>
      Hello World!
      <p>{d.bears}</p> 
      <button onClick={() => d.increasePopulation()}>Add</button>
      <button onClick={() => d.removeAllBears()}>Reset</button>
      <hr />
      <p>usando um component externo, sem contexto...</p>
      <ButtonEscola />
    </div>
  )
}

export default HomePage
