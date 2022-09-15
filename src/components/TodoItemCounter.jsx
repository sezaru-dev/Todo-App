import React from 'react'

const TodoItemCounter = ({todos, finishedTodo}) => {
  return (
    <div className='text-neutral-100 text-sm flex items-center justify-between border-b-2 border-darkBlue2/80 py-4 mb-10'>
      <div className='flex'>
         <p>Task</p>
         <span className='ml-1 bg-gray-600/50 px-2 rounded-full'>{todos}</span>
      </div>

      <div className='flex'>
         <p>Completed</p>
         <span className='ml-1 bg-gray-600/50 px-2 rounded-full'>{finishedTodo} of {todos}</span>
      </div>
    </div>
  )
}

export default TodoItemCounter