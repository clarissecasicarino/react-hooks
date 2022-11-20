import { use } from "react";

// this is the PROMISE that waits to get resolved
const res = fetch("/data.json").then((res) => res.json());

function App() {
  const data = use(res);
  return <div className="App">{JSON.stringify(data)}</div>;
}

export default App;
