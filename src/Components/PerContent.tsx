import { SetStateAction, Dispatch } from "react";
import { Trash } from "lucide-react";
interface List {
  name: string;
  id: string;
}
interface RenderList {
  todoList: List[];
  setTodoList: Dispatch<SetStateAction<List[]>>;
  value: List["name"];
  id: string;
}

const PerContent = ({ todoList, setTodoList, value, id }: RenderList) => {
  const deleteItem = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className=" flex flex-row justify-content item  m-1 w-full max-w-[350px] border-b-2">
        <div className="w-full flex items-center pl-5 bg-gray ">
          <h4 className="font-medium text-indigo">{value}</h4>
        </div>
        <div className="w-[150px]">
          <button
            className="w-full text-red-700 hover:text-white border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium text-sm px-5 py-2.5 text-center me-2dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
            onClick={deleteItem}
          >
            <Trash className="w-full"></Trash>
          </button>
        </div>
      </div>
    </>
  );
};

export default PerContent;
