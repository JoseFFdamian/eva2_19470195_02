import "./styles.css";
import { useState } from "react";

const ToDoElement = ({ value, idx, onCompleteToDo, removeToDoItem }) => {
  return (
    <li
      style={{
        textAlign: "left",
        margin: 15,
        backgroundColor: value.isCompleted ? "#5ae31982" : "#e3251982"
      }}
    >
      {value.todo}
      <button onClick={() => onCompleteToDo(idx)}>
        {!value.isCompleted ? "Tarea completada" : "Tarea incompleta"}
      </button>
      <button onClick={() => removeToDoItem(idx)}>Eliminar tarea</button>
    </li>
  );
};
export default function App() {
  const [inputValue, setToDo] = useState({
    todo: "",
    isCompleted: false
  });

  const [todos, updateToDosList] = useState([]);
  //agregar nueva tarea
  addToDo = () => {
    if (inputValue.todo) {
      updateToDosList([...todos, inputValue]);
      setToDo({
        todo: "",
        isCompleted: false
      });
    }
  };
  //compeltado la nueva tarea
  onCompleteToDo = (idx) => {
    const ourItem = todos[idx];
    const mTodos = [...todos];
    const updatedItem = {
      ...ourItem,
      isCompleted: !ourItem.isCompleted
    };
    mTodos[idx] = updatedItem;
    updateToDosList(mTodos);
  };
  //remover todo
  removeToDoItem = (idx) => {
    const mTodos = [...todos];
    mTodos.splice(idx, 1);
    //update todos list
    updateToDosList(mTodos);
  };

  return (
    <div className="App">
      <h1 style={{ textDecoration: "underline" }}>Lista De Tareas </h1>
      <input
        className="inputField"
        type="text"
        value={inputValue.todo}
        placeholder="Agregar nueva tarea"
        onChange={(e) =>
          setToDo({
            todo: e.target.value,
            isCompleted: false
          })
        }
      />
      <button onClick={addToDo}>Agregar nueva tarea</button>
      <ul>
        {todos.length > 0 &&
          todos.map((value, idx) => {
            return (
              <ToDoElement
                key={value.todo + idx}
                value={value}
                idx={idx}
                onCompleteToDo={onCompleteToDo}
                removeToDoItem={removeToDoItem}
              />
            );
          })}
      </ul>
    </div>
  );
}
