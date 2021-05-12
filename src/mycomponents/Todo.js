import React from 'react'
import { TItem } from './TItem'

export const Todo = (props) => {
    let todostyle = {
        marginTop: "10vh",
        overflowY: "auto",
        overflowX: "hidden",
        marginBottom: "10vh"
    }
    return (
        <div className="container" style={todostyle} >
            <hr></hr>
            <h5 style={{ fontFamily: "Century Gothic" }}> Todo List</h5>
            {
                props.todos.length === 0 ?
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Your Todo List is empty</strong> You can add a todo using the Add button
  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div> :
                    props.todos.map((todo) => {
                        return <TItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                    })
            }
        </div >
    )
}
