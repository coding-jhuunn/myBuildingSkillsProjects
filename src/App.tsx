import "./index.css";

import Header from "./Components/Header";
import Controls from "./Components/Controls";
import Content from "./Components/Content";
import { useState, useEffect } from "react";
function App() {
  const [itemTodo, setItemTodo] = useState<string>("");

  const [error, setError] = useState<boolean>(false);
  const [duplicate, setDuplicate] = useState<boolean>(false);

  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = localStorage.getItem("todolist");
    if (savedTodoList) {
      return JSON.parse(savedTodoList);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <Header></Header>
      <Controls
        itemTodo={itemTodo}
        setItemTodo={setItemTodo}
        todoList={todoList}
        setTodoList={setTodoList}
        error={error}
        setError={setError}
        duplicate={duplicate}
        setDuplicate={setDuplicate}
      ></Controls>
      <Content todoList={todoList} setTodoList={setTodoList}></Content>
    </>
  );
}

export default App;
