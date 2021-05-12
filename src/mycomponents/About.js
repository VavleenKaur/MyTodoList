import React from 'react'

export const About = () => {

    let aboutstyle = {
        overflowY: "auto",
        overflowX: "hidden",
        marginTop: "25vh",
        width: "60%",
        height: "60%",
        backgroundColor: "#FFE5B4",
        marginBottom: "10vh",
    }
    return (
        <div className="container-md my-6 border border-secondary text-center bg-color" style={aboutstyle} >
            <img src="1586599994717.jpg" className="img-fluid card-img-top border border-warning rounded-circle" alt="Vavleen Kaur" style={{ width: "20vh", height: "20vh" }}></img>
            <div className="card-body text-center" >
                <p className="card-text text-center " style={{ textDecorationColor: "white" }}>
                    Hey, peeps !! I am Vavleen Kaur, the maker of this <b style={{ fontFamily: "Ink Free" }}><u>My Todo List</u></b></p>
                <hr></hr>
                <p className="card-text text-center">This is a perfect ToDo list handy tool that you will need to add your pending tasks and remove when they are done. Moreover, you can be able to see your data and tasks even you left and come back again :)) <strong><i>Keep Todoing</i> </strong>using <b style={{ fontFamily: "Ink Free" }}>My Todo List</b>\^__^/</p>
            </div>
        </div>
    )
}
