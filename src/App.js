import React from "react";
import Store from "./store";

function App({ children }) {
  return (
    <div>
      <Store>{children}</Store>
    </div>
  );
}

export default App;
