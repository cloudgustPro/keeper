import React from 'react'
import { useState } from 'react'
const Home = () => {
    const[tasks, setTasks] = useState([
                                        {id: 1, name: "finish react router", completed: false},
                                        {id: 2, name: "start patient management system", completed: false},
                                        {id: 3, name: "connect github account to vscode", completed: true}
                                    ])
    
    const handleDelete = () =>{

    }
  return (
    <div className='mt-4 mx-8 w-auto'>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id} className='border shadow-sm rounded-md mb-4 p-2'>
                    <span>{task.id} - {task.name}</span>
                    <button onClick={handleDelete} className='flex justify-end bg-slate-400 border rounded-md p-1'>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
export default Home;