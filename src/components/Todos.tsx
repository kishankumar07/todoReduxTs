import { useDispatch,useSelector } from "react-redux"
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {

    const todos = useSelector(state => state.todos);
    // console.log(todos)
    const dispatch = useDispatch()

  return (
    <>
        <h1>Todos</h1>
        {todos.map((todo)=>(
            <div key={todo.id}>
                <p>{todo.text}</p>
                   <button onClick={()=>{dispatch(removeTodo(todo.id))}}>Remove</button>
            </div>)
        )
        }
    </>
  )
}

export default Todos
