import './App.css';
import LoginScreen from './login/loginScreen';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './login/singup';
import ForgotPassword from './login/forgotpassword';
import Dashboard from './login/dashboard';
import UserDataComponent from './useContext';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<UserDataComponent />} />
      </Routes>
    </Router>
  );
}

export default App; //Export 
