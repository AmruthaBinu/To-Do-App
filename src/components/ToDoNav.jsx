import React from 'react'
import { Link } from 'react-router-dom'

const ToDoNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-info">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="#">To-Do App</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Add_To-Do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/search">Search To-Do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/delete">Delete_To-Do</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/view">View_All_To-Do</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default ToDoNav