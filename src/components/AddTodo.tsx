import { FormEvent, useState } from "react"
import { useDispatch} from "react-redux"
import { addTodo } from "../features/todo/todoSlice"

const AddTodo = () => {

    const [value,setValue] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler = (e:FormEvent) =>{
        e.preventDefault()

        dispatch(addTodo(value));
        setValue('');
    }
 
  return (
    <>
   <form onSubmit={addTodoHandler}>
        <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="Enter a Todo..."/>

        <button type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Add Todo</button>
   </form>
    </>
  )
}

export default AddTodo
