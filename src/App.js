import { Route, Routes } from "react-router-dom";
import Information from "./login/Information";
import SignUp from "./login/SignUp";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Information" element={<Information />}></Route>
      </Routes>
    </>
  );
}

export default App;
