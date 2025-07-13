import React from 'react'
import ToDoNav from './ToDoNav'

const AddToDo = () => {
  return (
    <div>
        <ToDoNav />
        <br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">User Id</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">ID</label>
                            <input type="text" className="form-control" />

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <label htmlFor="" className="form-label">Status</label>
                            <select name="" id="" className="form-control">
                                <option className="option">Completed</option>
                                <option className="option">Not-Completed</option>
                            </select>

                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Submit</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddToDo