import './App.css';
import LoginScreen from './login/loginScreen';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignUp from './login/singup';
import ForgotPassword from './login/forgotpassword';
import Dashboard from './login/dashboard';
import UserDataComponent from './useContext';
import ThemeProvider from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';
function App() {
  return (
    <ThemeProvider>
      <ThemeToggleButton />
      <Router>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/userdata" element={<UserDataComponent />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

//them, toggleTeham 

export default App; //Export 
