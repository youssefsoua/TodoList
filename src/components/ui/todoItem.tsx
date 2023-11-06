export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = (props: TodoItemProps) => {
  const { todo } = props;
  return (
    <div
      className={`${
        todo.completed ? "line-through text-gray-600" : ""
      } bg-gray-300 p-2 rounded `}
    >
      <h2>{todo.title}</h2>
    </div>
  );
};

export default TodoItem;
