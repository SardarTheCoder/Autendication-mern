import './App.css';
import AdminDashboard from './component/AdminDashboard';
import Login from './component/login';
import Rejester from './component/rejester';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import UserDashboard from './component/userdashboard';
function App() {
  return (
    <div className="App">
   
<BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Rejester/>} />
      <Route path="/admin-dashboard" element={<AdminDashboard/>} />
      <Route path="/user-dashboard" element={<UserDashboard/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
