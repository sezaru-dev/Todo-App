import React, { useState } from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { ACTIONS } from '../App'

const TodoForm = ({dispatch}) => {
   const [title, setTitle] = useState('')

   const submitHandler = e => {
      e.preventDefault()
      
      /* empty input validation */
      if (title.length > 0) {
         dispatch({type: ACTIONS.ADD_TODO, payload: {title: title}})
         setTitle('')
      }
   }
  return (
    <div className='mb-6'>
      <form className='flex shadow-lg'  onSubmit={submitHandler}>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} className='flex-1 p-2 border-none outline-none h-10 bg-neutral-200 placeholder-gray-500 rounded-sm' placeholder='Enter new task'/>
      <button type="submit" className='bg-lightBlue flex items-center justify-center p-2.5 h-10 hover:bg-lightBlue/80 ml-2 rounded-sm'>
         Create
         <AiOutlinePlusCircle size={20} className='ml-1'/>
      </button>
      </form>
    </div>
  )
}

export default TodoForm