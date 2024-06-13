import { collection, doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'

export default function TodoInput() {
  const [title, setTitle] = useState('안녕')

  function handleSubmit(e) {
    e.preventDefault()

    console.log('abc')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Write a todo..'
        value={title}
        onChange={() => {}}
      />
    </form>
  )
}
