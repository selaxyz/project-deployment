import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const baseURL =
    process.env.NODE_ENV === "production"
      ? "/api/v1/todos"
      : "http://localhost:3001/api/v1/todos";

  const handleFetch = async () => {
    try {
      const res = await fetch(baseURL);
      if (res.ok) {
        const jdata = await res.json();
        setData(jdata.data.todos);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div className="App">
      <table border={1}>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>COMPLETED</th>
        </tr>
        {data.map((todo) => (
          <tr>
            <td>{todo.todo_id}</td>
            <td>{todo.title}</td>
            <td>{todo.description}</td>
            <td>{todo.completed ? "True" : "False"}</td>
          </tr>
        ))}
      </table>
      <button onClick={() => handleFetch()}>fetch</button>
    </div>
  );
}

export default App;
