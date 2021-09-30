import React from 'react'
import Form from './Form'
import List from './List'
import { useGlobalContext } from './context'
function App() {
  const { list } = useGlobalContext()
  return (
    <main>
      <section className='section-center'>
        <Form />
        {list.length > 0 && <List />}
      </section>
    </main>
  )
}

export default App
