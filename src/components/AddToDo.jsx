import React from 'react'
import ToDoNav from './ToDoNav'

const AddToDo = () => {
    return (
        <div>
            <ToDoNav />
            <br />
            <div className="container">
                <div className="row">
                    <h3 className="text-center text-primary">Add To-Do List</h3>

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

                                <label htmlFor="" className="form-label">Status</label><br />
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" />
                                        <label class="form-check-label" for="inlineCheckbox1">Completed</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="false" />
                                        <label class="form-check-label" for="inlineCheckbox2">Not-Completed</label>
                                </div>

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