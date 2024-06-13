import { useState } from 'react'
import { db } from '../conf/firebase'
import { doc, deleteDoc, updateDoc } from 'firebase/firestore'

export default function Todo({ todo }) {
  async function removeTodo() {
    if (confirm('삭제하시겠습니까')) {
      await deleteDoc(doc(db, 'todos', todo.id))
    }
  }

  async function handleChange() {
    const todoRef = doc(db, 'todos', todo.id)
    await updateDoc(todoRef, {
      isDone: !todo.isDone,
    })
  }

  return (
    <div className='todo_item'>
      <input type='checkbox' checked={todo.isDone} onChange={handleChange} />{' '}
      <span className={todo.isDone ? 'done' : ''}>{todo.title}</span>
      <div className='btns'>
        <button>수정</button>
        <button onClick={removeTodo}>삭제</button>
      </div>
    </div>
  )
}
