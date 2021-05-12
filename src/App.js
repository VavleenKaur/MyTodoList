
import './App.css';
import Header from './mycomponents/Header'
import {About} from './mycomponents/About'
import {Notification} from './mycomponents/Notification'
import {AddToDo} from './mycomponents/AddToDo'
import {Todo} from './mycomponents/Todo'
import {Footer} from './mycomponents/Footer'



import React, { useState,useEffect } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


let nwtodo;
if(localStorage.getItem("todos")===null)
{
  nwtodo=[];
}
else
{
nwtodo=JSON.parse(localStorage.getItem("todos"));
}


const onDelete = (todo) =>{
settodo(todos.filter((p)=> {
    return p!==todo;
    }));
    
    localStorage.setItem("todos",JSON.stringify(todos));
   
}


const addToDo=(title,desc)=>
{ let sno;
if (todos.length===0)
{sno=1;}
else
{sno=todos[todos.length-1].sno + 1;}
const addedToDo={
  sno: sno,
  title: title,
  desc: desc,

}
settodo([...todos, addedToDo]); 

}



const [todos, settodo] = useState(nwtodo);

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

  return (
    <>
    <Router>
    <Header title="  My Todos List  " />
    <Switch>
    <Route exact path="/" render={()=>
    {return(
      <>
      <AddToDo addToDo={addToDo} />
    <Todo todos={todos} onDelete={onDelete}/>
    </>
    )}}>

          </Route>

          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/notifications">
            <Notification />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
