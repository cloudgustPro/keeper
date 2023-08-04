import React from 'react'
import { useState } from 'react'
import TaskCard from './TaskCard'
const Home = () => {
    const[tasks, setTasks] = useState([
                                        {id: 1, name: "finish react router", completed: false},
                                        {id: 2, name: "start patient management system", completed: false},
                                        {id: 3, name: "connect github account to vscode", completed: true}
                                    ])
    const[show, setShow] = useState(true)
    
    const handleDelete = (id) =>{
        setTasks(tasks.filter(task =>task.id != id))

    }
  return (
    <div className='mt-4 mx-8 w-auto'>
        <ul>
            <button className='ml-80 border-2 shadow rounded-md bg-blue-800 text-white p-1' onClick={()=>setShow(!show)}>Toggle</button>
            {show && tasks.map((task)=>(
              <TaskCard task={task}/>
            ))}
            
        </ul>
    </div>
  )
}
export default Home;