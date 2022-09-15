import React, { useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem';
import TodoItemCounter from './components/TodoItemCounter';
import { RiTodoLine } from "react-icons/ri";

export const ACTIONS = {
   ADD_TODO: 'addtodo',
   DELETE_TODO: 'deletetodo',
   TOGGLE_TODO: 'toggletodo'
}

const initialState = [
   {
      id: uuidv4(),
      title: 'Create a navigation',
      isComplete: true
   },
   {
      id: uuidv4(),
      title: 'Display products by fetching API',
      isComplete: false
   },
   {
      id: uuidv4(),
      title: 'Create add to cart',
      isComplete: false
   },
]

const reducer = (todos, action) => {
   switch (action.type) {
      case ACTIONS.ADD_TODO:
         return [...todos, newTodo(action.payload.title)]
      case ACTIONS.TOGGLE_TODO:
         return todos.map(todo => {
            if (todo.id === action.payload.id) {
               return {...todo, isComplete: !todo.isComplete}
            }
            return todo
         })
      case ACTIONS.DELETE_TODO:
         return todos.filter(todo => todo.id !== action.payload.id)            

      default:
         return todos
   }
}

const newTodo = (title) => {
   return {id: uuidv4(), title: title, isComplete: false}
}

const App = () => {
   const [todos, dispatch] = useReducer(reducer, initialState)
   let finishedTodo = todos.filter(todo => todo.isComplete === true).length
   
  return (
   <div className='max-w-xl mx-auto p-6 mt-6'>
      <h1 className='text-4xl md:text-5xl text-white mb-8 tracking-wide'>Todo App</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoItemCounter todos={todos.length} finishedTodo={finishedTodo}/>
      <ul>
         {
            todos.map(todo => (<TodoItem key={todo.id} todo={todo} dispatch={dispatch}/>))
         }
      </ul>
      {todos.length?
       null : 
      <div className='flex items-center justify-center flex-col space-y-2 text-gray-500'>
         <RiTodoLine size={28}/>
         <p>You have no more task.</p>
      </div>
      }
   </div>
  )
}

export default App