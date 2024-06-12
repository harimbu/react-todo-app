import './App.css'

export default function App() {
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
        <div className='todo_item'>
          <input type='checkbox' name='' id='' /> 안녕하세요
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div className='todo_item'>
          <input type='checkbox' name='' id='' /> 안녕하세요
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
        <div className='todo_item'>
          <input type='checkbox' name='' id='' /> 안녕하세요
          <div className='btns'>
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
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
