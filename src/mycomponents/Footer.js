import React from 'react'

export const Footer = () => {
    let fstyle = {
        bottom: "0",
        width: "100%",
        marginRight: "0vh",
        marginTop: "14vh"

    }
    return (
        <div className="bg-dark text-light py-1 fixed-bottom" style={fstyle}>
            <p className="text-center">Copyright &copy; MyTodosList.com</p>
        </div>
    )
}

