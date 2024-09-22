import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './features/Layout/Layout';
import Login from './features/login/login';
import AuthService from './authService';
import Founders from './features/founders/founders';
import AddOrganizationForm from './features/Organization/OrganizationForm';
import Dashboard from './features/login/dashboard';
import Events from './features/Events/events';
import AdminOrganization from './features/admin/Organization/AdminOrganization';
import OrganizationUsers from './features/admin/Organization/OrganizationUsers';
import OrganizationSites from './features/admin/Sites/OrganizationSites';
import { useSelector } from 'react-redux';
import { RootState } from './slices/store';
import ProjectRequirements from './features/projectRequirements/ProjectRequirements';

function App() {
  const loginRole=sessionStorage.getItem('role') ||useSelector((state:RootState)=>state.login.roles)

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

          {loginRole === 'jssw' && (
            <>
             <Route index element={<Navigate to="/home" />} />
            <Route path="home" element={<Dashboard />} />
            <Route path="founders" element={<Founders/>}/>
            <Route path="events" element={<Events/>}/>
            <Route path='projectRequirements' element={<ProjectRequirements/>}/>
            </>
          )}
          {loginRole === 'admin' && (
           <>
             <Route path='organizations' element={<AdminOrganization/>}/>
             <Route path='organizationUsers' element={<OrganizationUsers/>}/>
             <Route path='OrganizationSites' element={<OrganizationSites/>}/>
           </>

          )}
           
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
