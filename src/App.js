import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import FindId from "./pages/login/FindId";
import FindPassword from "./pages/login/FindPassword";
import Information from "./pages/login/Information";
import Login from "./pages/login/Login";
import ResetPassword from "./pages/login/ResetPassword";
import SignUp from "./pages/login/SignUp";
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/FindId" element={<FindId />}></Route>
        <Route path="/FindPassword" element={<FindPassword />}></Route>
        <Route path="/ResetPassword" element={<ResetPassword />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
        <Route path="/Information" element={<Information />}></Route>
        <Route path="/Welcome" element={<Welcome />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
