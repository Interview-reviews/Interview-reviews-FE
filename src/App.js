import { Route, Routes } from "react-router-dom";
import Information from "./login/Information";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Main from "./pages/Main";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Information" element={<Information />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
      </Routes>
    </>
  );
}

export default App;
