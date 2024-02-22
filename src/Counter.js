import React from "react";
function Counter(){
    var[count,setCount]=React.useState(0);
    var[text,setText]=React.useState('')
    console.log('counter')
    function inc(){
        setCount(count+1);
        setText('Incremented')

    }
    function dec(){
        setCount(count-1);
    }
    React.useEffect(()=>{
        console.log("hello")

    },[])
    React.useEffect(()=>{
        if(count>0){
            document.getElementById('dd').style.display='block';
        setTimeout(()=>{
            document.getElementById('dd').style.display='none';
        },[1000])
        }
    })
    return(
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={()=>{inc()}}>Increment</button>
            <button onClick={()=>{dec()}}>Decrement</button>
            <div id='dd'>
                <h3>Incremented...</h3>
            </div>
        </div>
    )
}
export default React.memo(Counter);