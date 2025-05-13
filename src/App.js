import './App.css';
import LoginScreen from './login/loginScreen';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { SignUp } from './login/singup';
import { ForgotPassword } from './login/forgotpassword';
import { DashBoard } from './login/dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </Router>
  );
}

export default App; //Export 
