/* todos = [
{
 title:"go to gym"
 description: "go to gym"
}
 ]
 */

export function Todos({ todos }) {
  if (!Array.isArray(todos)) {
    return <div>No todos to show</div>;
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h1>{todo.description}</h1>

            <button
              onClick={() => {
                fetch("http://localhost:3000/todo/completed", {
                  method: "put",
                  body: JSON.stringify({
                    id: todo._id,
                  }),
                  headers: {
                    "Content-Type": "application/json",
                  },
                }).then(async (res) => {
                  const json = await res.json();
                  alert("completed marked");
                });
              }}
            >
              {todo.completed == true ? "completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
