import React, { useState } from 'react'
import Button from './Button'

const Todo = () => {
  const [input, setInput] = useState("");
  const [updatedInput, setUpdatedInput] = useState([]);

  function addTodoTask (){
    setUpdatedInput([...updatedInput, { editValue:input}])
    setInput('');
  }

  const editTodoTask = (i) =>{
    setUpdatedInput(
      updatedInput.map((editvalue,ind)=>{
          if(ind === i){
            return {...editvalue, edit: editvalue.edit?false : true}
          }
          else{
            return editvalue
          }
      })
    )
  }

  
  const whenEditInputValueChange = (value, index) => {
    setUpdatedInput(
      updatedInput.map((editValue, ind) => {
        if (ind === index) {
          return { ...editValue, editValue : value };
        } else {
          return editValue;
        }
      })
    );
  };

  let b;
  const deleteTodo=(i)=>{
    const a = [...updatedInput]
   b = a.filter((item, ind)=>{
   console.log("item"+ item)
   console.log("ind"+ ind)
   console.log("i"+ i)
          return ind !== i
       
      }
      // addCategory(a);
    )
    console.log("a"+a);
    // a.splice(i, 1);
    setUpdatedInput(b);
  }
  return (
    <div className='todo text-center'>
    <div className="inputfeild">
    <input type="text" value={input} className='input' placeholder='Enter Your Task'
     onChange={(e)=>setInput(e.target.value)} />
    <Button classes={"b"} buttonValue='+' btnClicked={addTodoTask} />
    </div>
    {updatedInput.map((e,i)=>{
      console.log({e})
      return(
         <div  className="taskadded" key={i}>
         {e.edit ? (
            <input value={e.editValue}
            onChange={(e) => whenEditInputValueChange(e.target.value, i)}
            />
          ):(<span style={{ fontSize: 20, color: "white" }}>{e.editValue}</span>)}
          <div className='d-flex'> 
         <Button classes={"sb"} buttonValue={e.edit ? "save" : "Edit"} btnClicked={()=>editTodoTask(i)}/>
         <Button classes={"sb1"} buttonValue="-" btnClicked={()=>deleteTodo(i)} />
         </div>
         </div>
      )
    })}
    </div>
  )
}

export default Todo