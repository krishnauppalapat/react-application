import React from "react";
function Todo(props){
    console.log(props)
    // console.log('add todo'+props.todo)  //to check whether the child is re-rendered or not
    const textDecoration=props.done?"line-through":"none";
    return(
       
            <li style={{textDecoration}}>
                {props.todo.text}
                <button onClick={()=>{props.doneTodo(props.index)}}>Done</button>
                <button onClick={()=>{props.undoTodo(props.index)}}>Undo</button>
                <button onClick={()=>{props.deleteTodo(props.index)}}>Delete</button>
            </li>
        
    )
}
export default React.memo(Todo);