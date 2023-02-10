import './App.css'
import { useState } from 'react';
function App() {

  //setting use state to add values
  const [state,setState] = useState([])

  // to take values from input field
  const [todo,setTodo] =  useState('')

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={todo} onChange={(event)=>setTodo(event.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setState([...state,{id:Date.now(), text:todo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
       { state.map((value)=>{
        return (
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked);
              console.log(value);
              setState(
              state.filter(obj=>{
                if(obj.id===value.id){
                  obj.status=e.target.checked
                }
                return obj
              })
            )}} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>

        )
       })
       } 
      </div>
    </div>
  );
}

export default App;
