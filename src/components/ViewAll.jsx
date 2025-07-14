import React, { useEffect, useState } from 'react'
import ToDoNav from './ToDoNav'
import axios from 'axios'

const ViewAll = () => {
    const [todoData, changeToDo] = useState(
        [
            
        ]
    )

    const fetchData=()=>
    {
            axios.get("https://jsonplaceholder.typicode.com/todos").then(
                (response)=>{
                    changeToDo(response.data)
                }
            ).catch()
        }
    

    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <ToDoNav />
            <br />
            <div className="container">
                <div className="row">
                    <h3 className="text-center text-primary">View To-Do List</h3>

                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table class="table table-bordered table-striped table-hover">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Completed</th>
                                </tr>
                            </thead>
                            <tbody>
                            {todoData.map(
                                (value, index) => {
                                    return (
                                        
                                            <tr>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>
                                                <td>
                                                    <span className={`badge ${value.completed ? 'bg-success' : 'bg-secondary'}`}>
                                                        {value.completed ? "Completed" : "Not-Completed"}
                                                    </span>
                                                </td>

                                            </tr>
                                        
                                    )
                                }
                            )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll