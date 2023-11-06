import { useEffect, useState } from "react";
import { getAllTodos } from "@/common/api/todo";
import TodoItem, { Todo } from "@/components/ui/todoItem";

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getAllTodos();
        setTodos(response);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const filteredTodos = todos.filter((todo) =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <h1 className="text-4xl text-zinc-800 font-bold">Todos List</h1>
      </header>
      <input
        type="text"
        placeholder="Search Todos"
        className="p-2 border rounded my-8"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <section className="flex flex-col gap-2 border rounded-md p-4">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </section>
    </div>
  );
}

export default TodoList;
