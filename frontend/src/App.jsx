import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './Context/AuthContext';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ClassList from './components/Class/ClassList';
import ClassDetail from './components/Class/ClassDetail';
import AddUnit from './components/Unit/AddUnit';
import CreateClass from './components/Class/CreateClass';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <AuthProvider>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/classes" element={<ClassList />} />
          <Route path="/classes/create" element={<CreateClass />} />
          <Route path="/classes/:id" element={<ClassDetail />} />
          <Route path="/classes/:classId/add-unit" element={<AddUnit />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
