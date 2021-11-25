import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  let myStyle = {
    minHeight:"60vh",
    margin:"10px auto"
  }
  return (
    <div className="container my-3" stytle={myStyle }>
      <h3 className="my3">Todos List</h3>
      {props.todos.length===0? "No TODOS to display":
        props.todos.map((todo)=>{
            return(
              <>
              
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
            </>
            ) 
        })
             }
    </div>
  )
}
