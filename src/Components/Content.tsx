import { SetStateAction, Dispatch } from "react";
import PerContent from "./PerContent";

interface List {
  name: string;
  id: string;
}
interface RenderList {
  todoList: List[];
  setTodoList: Dispatch<SetStateAction<List[]>>;
}

const Content = ({ todoList, setTodoList }: RenderList) => {
  return (
    <>
      <div className=" container ">
        {" "}
        <div className="  shadow-inner rounded-lg shadow-indigo-300 w-full max-w-[600px] min-h-[100px] p-6 flex items-center flex-col ">
          {todoList.length <= 0 ? (
            <div className="  p-4 m-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 w-full max-w-[350px] flex items-center justify-center">
              <span className="font-medium">No Tasks</span>
            </div>
          ) : (
            todoList.map((item) => (
              <PerContent
                id={item.id}
                key={item.id}
                value={item.name}
                todoList={todoList}
                setTodoList={setTodoList}
              ></PerContent>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Content;
