import { useEffect, useState } from 'react'
import './App.css'
import { db } from './conf/firebase'
import { collection, query, where, onSnapshot } from 'firebase/firestore'

export default function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'notes'))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos = []
      querySnapshot.forEach((doc) => {
        todos.push(doc.data())
      })
    })

    setTodos(todos)
  }, [])

  return (
    <div className='container'>
      <div className='header'>
        <h1>🎃 Todo</h1>
        <button>정보</button>
      </div>

      <form>
        <input type='text' placeholder='Write a todo..' />
      </form>

      <div className='todos'>
        {todos.map((todo) => (
          <div className='todo_item' key={todo.id}>
            <input type='checkbox' name='' id='' /> {todo.title}
            <div className='btns'>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </div>
        ))}
      </div>

      <div className='todo_bottom'>
        <div>
          전체 <span>10</span>
        </div>
        <div>
          완료한 일 <span>4</span>
        </div>
        <div>
          남은 일 <span>6</span>
        </div>
      </div>
    </div>
  )
}
