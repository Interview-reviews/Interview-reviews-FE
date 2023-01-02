import { Route, Routes } from "react-router-dom";
import Login from "./login/login";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
