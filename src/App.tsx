import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { MainStatPage } from './pages/MainStatPage';
import { MyPage } from './pages/MyPage';
import { PrivateRoute } from './pages/PrivateRoute';
import { SubStatPage } from './pages/SubStatPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/enroll" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/mainStat" element={<MainStatPage />} />
          <Route path="/subStat" element={<SubStatPage />} />
          <Route path="/myPage" element={<MyPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
