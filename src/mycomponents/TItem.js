import React from 'react'

export const TItem = ({ todo, onDelete }) => {

    return (
        <div>
            <h4 className="my-3">{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-success" onClick={() => {

                if (window.confirm('Press OK to confirm TODO task completion')) { onDelete(todo); };

            }}>Task Done</button>
        </div >
    )
}
