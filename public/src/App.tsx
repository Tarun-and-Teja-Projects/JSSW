import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Login from './features/login/login';
import AuthService from './authService';
import Founders from './features/founders/founders';
import Contact from './features/contact';
import AddOrganizationForm from './features/Organization/OrganizationForm';
import Dashboard from './features/login/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/addOrganization" element={<AddOrganizationForm/>}/>

        {/* Protected route for authenticated users */}
        <Route element={<AuthService />}>
          {/* Nested route inside AuthService */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="founders" element={<Founders/>}/>
            <Route path="contactDetails" element={<Contact/>}/>
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
