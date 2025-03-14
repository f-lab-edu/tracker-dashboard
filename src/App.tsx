import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { EnrollForm } from './components/auth/EnrollForm';
import { LoginPage } from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/enroll" element={<EnrollForm />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
