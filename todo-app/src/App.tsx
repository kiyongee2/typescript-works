import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState<string>('')

  //할일 업데이트
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }
  // console.log(input);

  //할일 추가
  const addTodo = () => {
    setTodos([input, ...todos])
    setInput('')
  }

  //할일 삭제
  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, idx) => idx !== index))
  }

  //랜더링 제어
  useEffect(() => {
    console.log("컴포넌트 최초 랜더링");
  }, [])

  return (
    <>
      <div className='container'>
       <h1>Todo App</h1>
       <div className='input-box'>
        <input 
          type="text" 
          placeholder='할 일을 입력하세요'
          value={input}
          onChange={inputChange}
          />
        <button onClick={addTodo}>추가</button><br></br>
       </div>
       <ul className='todo-list'>
        {todos.map((todo, idx)=>(
          <TodoItem 
            key={idx}
            todo={todo}
            index={idx}
            onDelete={deleteTodo}
          />
        ))}
       </ul>
      </div>
    </>
  )
}

export default App
