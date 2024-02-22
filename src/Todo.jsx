import React from "react";
import Todo from "./todos";
function Todos(){
    var[todo,setTodo]=React.useState([]);  
    //  console.log('todos')
     var ar=React.useMemo(()=>{
        return [10,20,30]
        },[]);
         //re-renders the array
    function addTodo(){
        var newTodo=document.getElementById('d1');
        var newValue=newTodo.value;
        let newObj={ 'text': newValue, 'done': false }
        // console.log(newObj)
        // todo.push(newObj)
        setTodo([...todo,newObj]);
        newTodo.value='';

    }
   var del=React.useCallback((i)=>{
    var temp=[...todo];
    temp.splice(i,1);
    console.log(temp)
    setTodo([...temp])

    },[todo])
    var doneTodo=React.useCallback((i)=>{
        var temp = [...todo];
        temp[i].done = true;
        setTodo([...temp])   
        
    },[todo])
    var undoTodo=React.useCallback((i)=>{
          var temp=[...todo];
          temp[i].done=false;
          setTodo([...temp])
    },[todo])
    var editTodo=React.useCallback((i,newText)=>{
        const newTodoList=[...todo];
        newTodoList[i].text=newText;
        document.getElementById('d1').innerHTML=newText;
        setTodo(newTodoList)
       
    },[todo])

    return(
        <div>
            <h1>Todo List</h1>
            <input type='text' id='d1'/>
            <button onClick={()=>{addTodo()}}>Add Todo</button>
            <ul>
                {
                    todo.map((a,i)=>{
                        return(
                            <Todo key={i} todo={a} text={a.text} done={a.done} index={i} ar={ar} deleteTodo={del} doneTodo={doneTodo} undoTodo={undoTodo} editTodo={editTodo}></Todo>
                        )

                    })
                }
            </ul>
        </div>
    )
}
export default React.memo(Todos);