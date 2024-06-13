import Todo from './Todo'

export default function Todos({ todos }) {
  return (
    <div className='todos'>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}
