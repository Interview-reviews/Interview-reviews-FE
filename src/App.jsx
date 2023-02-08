import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import FindId from './pages/login/FindId';
import FindPassword from './pages/login/FindPassword';
import Information from './pages/login/Information';
import Login from './pages/login/Login';
import ResetPassword from './pages/login/ResetPassword';
import SignUp from './pages/login/SignUp';
import Main from './pages/Main';
import NotFound from './pages/NotFound';
import Review from './pages/review/Review';
import WriteReview from './pages/review/WriteReview';
import Welcome from './pages/Welcome';
import Community from './pages/Community/CommunityMain';
import Write from './pages/Community/CommunityWrite';

export default function App() {
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
        <Route path="/WriteReview" element={<WriteReview />}></Route>
        <Route path="/Review" element={<Review />}></Route>
        <Route path="/WriteReview" element={<WriteReview />}></Route>
        <Route path="/Community" element={<Community />}></Route>
        <Route path="/Community/Write" element={<Write />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
