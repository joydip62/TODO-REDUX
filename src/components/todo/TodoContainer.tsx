
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  return (
    <>
    <div className="flex justify-between mb-3">
        <AddTodoModal />
        <TodoFilter />
    </div>
      <div className="bg-red-400 w-full h-full rounded-xl p-3">
        <div className="bg-white rounded-xl p-3 m-3 text-center font-bold text-2xl">
          There are no task pending
        </div>

        <TodoCard />
        <TodoCard />
        <TodoCard />
        <TodoCard />
      </div>
    </>
  );
};

export default TodoContainer;
