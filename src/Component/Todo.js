import React, { useState } from "react";
import Button from "./Button";
import Navbars from "./Navbar";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Config/FirebaseCongig";
import {
  getDatabase,
  ref,
  onValue,
  push,
  update,
  remove,
} from "firebase/database";
import { useNavigate, useParams } from "react-router-dom";

const Todo = () => {
  const params = useParams()
  const auth = getAuth(app);
  const db = getDatabase(app);
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [updatedInput, setUpdatedInput] = useState([]);
  const [user, setUser] = useState({});
  console.log("USER", user);

  function addTodoTask() {
    if (input.length) {
      setInput("");

      const reference = ref(db, `todos/${user.uid}`);
      push(reference, { value: input, createdAt: new Date().toString() });
    }
  }

  React.useEffect(() => {
    const todoRef = ref(db, `todos/${user.uid}`);
    onValue(todoRef, (e) => {
      const todo = Object.entries(e.val()).map(([key, value]) => {
        return {
          ...value,
          id: key,
        };
      });
      setUpdatedInput(todo);
    });
  }, [user]);

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const reference = ref(db, `users/${user.uid}`);
        onValue(reference, (e) => {
          console.log("reference", reference);
          const status = e.exists();
          if (status) {
            setUser({ ...e.val(), uid: user.uid });
          }
          console.log("status", status);
        });
      } else {
        navigate("/");
      }
    });
  }, []);

  const updateOnClick = (id, value) => {
    const todoRef = ref(db, `todos/${user.uid}/${id}`);
    update(todoRef, { value, createdAt: new Date() })
      .then((update) => {
        console.log("UDPATE", update);
      })
      .catch((err) => console.log("ERROR", err));
  };

  const editTodoTask = (i) => {
    setUpdatedInput(
      updatedInput.map((value, ind) => {
        if (ind === i) {
          if (value.edit) {
            updateOnClick(value.id, value.value);
            return { ...value, edit: value.edit ? false : true };
          } else {
            return { ...value, edit: value.edit ? false : true };
          }
        } else {
          return value;
        }
      })
    );
  };

  const whenEditInputValueChange = (text, index) => {
    setUpdatedInput(
      updatedInput.map((value, ind) => {
        if (ind === index) {
          return { ...value, value: text };
        } else {
          return value;
        }
      })
    );
  };

  const deleteTodo = (id, i) => {
    const todoRef = ref(db, `todos/${user.uid}/${id}`);
    remove(todoRef)
    .then((deleted) => {
      console.log("successfully deleted");
    })
    .catch((err) => console.log("GOT THE ERROR ON DELETE", err));
    setUpdatedInput(updatedInput.filter((item, index)=>{
      return index!==i;
     }))
  };
  const deleteAll =()=>{
    const todoRef = ref(db, `todos/${user.uid}`);
      remove(todoRef)
      setUpdatedInput([]);   
  }
  const handleKeyDown = (e) =>{
    if (e.key === 'Enter') {
      addTodoTask()
    }
  }
  return (
    <>
      <Navbars />

      <div className="mainDiv">
        <div className="todo text-center">
          <div className="inputfeild">
            <input
              type="text"
              value={input}
              className="input"
              placeholder="Enter Your Task"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} 
            />
            <Button classes={"b"} buttonValue="+" btnClicked={addTodoTask} />
          </div>
          {updatedInput.map((e, i) => {
            let date = new Date(e.createdAt);
            return (
              <div className="taskadded" key={i}>
                {e.edit ? (
                  <input
                    value={e.value}
                    required
                    onChange={(e) =>
                      whenEditInputValueChange(e.target.value, i)
                    }
                  />
                ) : (
                  <div style={{ textAlign: "left" }}>
                    <span style={{ fontSize: 20, color: "white" }}>
                      {e.value}
                    </span>
                    <span
                      style={{ display: "block", fontSize: 12, color: "gray" }}
                    >
                      {date.getHours().toString().length > 1
                        ? date.getHours()
                        : "0" + date.getHours()}
                      :
                      {date.getMinutes().toString().length > 1
                        ? date.getMinutes()
                        : "0" + date.getMinutes()}
                      {"-"}
                      {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
                    </span>
                  </div>
                )}
                <div className="d-flex">
                  <Button
                    classes={"sb"}
                    buttonValue={e.edit ? "save" : "Edit"}
                    btnClicked={() => editTodoTask(i)}
                  />
                  <Button
                    classes={"sb1"}
                    buttonValue="-"
                    btnClicked={() => deleteTodo(e.id, i)}
                  />
                </div>
              </div>
            );
          })}
          <div style={{display:'flex', gap:10, marginTop:10}}>
          <span className="sb px-3" style={{ color: "white" , width: "auto"}}>
            {"item left " + updatedInput.length}
          </span>
          <button className="sb px-3" style={{ width: "auto", }} onClick={deleteAll}>Delete All</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
