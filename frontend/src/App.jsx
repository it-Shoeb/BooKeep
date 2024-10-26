import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
        <Outlet />
        <Homepage></Homepage>
    </>
  );
}

export default App;
