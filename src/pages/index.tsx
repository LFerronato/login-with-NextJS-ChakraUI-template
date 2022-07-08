import type { NextPage } from 'next'
import { Part1 } from 'components/homeTestes/Part1'
import { Part2 } from 'components/homeTestes/Part2'

const HomePage: NextPage = () => {
  return (
    <>
      <Part1 />
      <hr />
      <hr />
      <hr />
      <Part2 />
    </>
  )
}

export default HomePage
