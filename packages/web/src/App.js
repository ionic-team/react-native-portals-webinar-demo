import Portals from "@ionic/portals";
import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  function updateCount() {
    setCount(count + 1);
    Portals.publish("count:updated", { count: count });
  }
  return (
    <div className="App">
      <button onClick={updateCount}>Say hello to {count}</button>
    </div>
  );
}

export default App;
