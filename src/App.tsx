import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/enroll" element={<LoginPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
