import { BrowserRouter } from "react-router-dom";

import Router from "./app/routes";
import "./views/style/index.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
