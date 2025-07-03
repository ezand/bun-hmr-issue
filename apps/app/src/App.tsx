import "./index.css";

import { Button } from "@bun-hmr-issue/form";

export function App() {
  return (
    <div className="app">
      <div>
        <button>Button (from app)</button>
        <Button />
      </div>
    </div>
  );
}

export default App;
