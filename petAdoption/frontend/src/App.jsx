import { useState } from "react";
import NavBar from "./components/NavBar";
import InputForm from "./components/InputForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <NavBar />
        <InputForm />
      </div>
    </>
  );
}

export default App;
