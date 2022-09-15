import React from 'react'
import {TbTrash} from 'react-icons/tb'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { ACTIONS } from '../App'

const TodoItem = ({todo, dispatch}) => {
   return (
      <>
         <ul className={`${todo.isComplete ? 'bg-darkBlue2/20': 'bg-darkBlue2'} w-full flex items-center rounded-md overflow-hidden mb-2 transition-all ease-in-out duration-200 shadow-lg`}>
            <p className={`${todo.isComplete ? 'text-gray-100/30 line-through': 'text-white'} text-base flex-1 p-2 truncate`}>{todo.title}</p>
            <button className="text-lightBlue p-2.5 flex-none" onClick={() => dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: todo.id}})}>
            {todo.isComplete ? <FaCheckCircle size={18}/>: <FaRegCircle size={18}/>}
            </button>
            <button className='p-2.5 text-rose-500 flex-none'  onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})}>
               <TbTrash size={20}/>
            </button>
         </ul>
      </>
     )
}

export default TodoItem