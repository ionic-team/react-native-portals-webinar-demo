import Portals from "@ionic/portals";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  function updateCount() {
    Portals.publish({ topic: "count:updated", data: count + 1 });
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={updateCount}>Add 1 too {count}</button>
    </div>
  );
}

export default App;
