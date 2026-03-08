import { useState } from "react";
import ControlledModal from "./DesignPatterns/Controled-Uncontrolled.jsx/controlled/ControlledModal";

function App() {
  const [show, setSow] = useState(false);
  return (
    <>
      <button onClick={() => setSow((prev) => !prev)}>
        {show ? "Hide" : "show"}
      </button>
      <ControlledModal show={show} onClose={() => setSow(false)}>
        <div>hello</div>
      </ControlledModal>
    </>
  );
}

export default App;
