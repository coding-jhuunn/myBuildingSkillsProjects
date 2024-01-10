import { Plus } from "lucide-react";
import { SetStateAction, Dispatch } from "react";
import shortid from "shortid";
interface List {
  name: string;
  id: string;
}
interface ControlsData {
  itemTodo: string;
  setItemTodo: Dispatch<SetStateAction<string>>;
  todoList: List[];
  setTodoList: Dispatch<SetStateAction<List[]>>;
  error: boolean;
  setError: Dispatch<SetStateAction<boolean>>;
  duplicate: boolean;
  setDuplicate: Dispatch<SetStateAction<boolean>>;
}
const Controls = ({
  itemTodo,
  setItemTodo,
  todoList,
  setTodoList,
  error,
  setError,
  duplicate,
  setDuplicate,
}: ControlsData) => {
  const CheckifExists = (arr: List[], value: string) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].name === value) {
        return true;
      }
    }
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setItemTodo(e.currentTarget.value);
  };
  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDuplicate(false);
    setError(false);
    if (itemTodo.length === 0) {
      setError(true);
      console.log("empty");
    } else {
      if (CheckifExists(todoList, itemTodo)) {
        setDuplicate(true);
        console.log("exits");
      } else {
        setTodoList([...todoList, { name: itemTodo, id: shortid.generate() }]);
        setItemTodo("");
        console.log(todoList);
        setError(false);
        setDuplicate(false);
      }
    }
  };
  return (
    <>
      <div className="container h-[125px]  relative">
        <div className=" flex justify-center items-center w-[100%] max-w-[500px] m-3 p-3 relative">
          <form className="flex flex-row" onSubmit={handleAdd}>
            <div>
              <input
                onChange={handleChange}
                value={itemTodo}
                type="text"
                className="h-[36px] w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div>
              {" "}
              <button className="h-[36px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                <Plus></Plus>
              </button>
            </div>
          </form>
        </div>
        <div className="container h-[50px] absolute bottom-0 left-0 text-sm text-red-800    dark:text-red-600">
          {error ? (
            <span>The input field is empty. Please enter a value.</span>
          ) : duplicate ? (
            <span>The data is already exists.</span>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Controls;
