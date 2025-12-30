
interface TodoItemProps{
  todo: string,
  index: number,
  onDelete: (index: number) => void
}

const TodoItem = ({todo, index, onDelete}: TodoItemProps) => {
  return(
    <li>
      {todo}
      <button onClick={() => onDelete(index)} 
          className='delete-btn'>삭제</button>
    </li>
  )
}

export default TodoItem