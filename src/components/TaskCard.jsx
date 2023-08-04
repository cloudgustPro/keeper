import React from 'react'

const TaskCard = (props) => {
  return (
    <li key={props.task.id} className='border shadow-sm rounded-md mb-4 p-2'>
    <span>{props.task.id} - {props.task.name}</span>
    <button onClick={()=>handleDelete(props.task.id)} className='flex justify-end bg-slate-400 border rounded-md p-1'>Delete</button>
</li>
  )
}
export default TaskCard;