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
import About from './features/about/about';
import Gallery from './features/gallery/gallery';
import Videos from './features/videos/videos';
import Donate from './features/denote/donate';
import Contact from './features/contact';
import ReferenceTable from './features/referencetables/referenceTable';


function App() {
  const rolesFromState = useSelector((state: RootState) => state.login.roles);
  const rolesFromSession = sessionStorage.getItem('role');
  
  let loginRole;
  
  if (rolesFromState.length>0) {
      loginRole = rolesFromState; 
  } else if (rolesFromSession) {
      loginRole = rolesFromSession;
  } else {
      loginRole = null;
  }
  
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
            <Route path="about" element={<About/>}/>
            <Route path='gallery' element={<Gallery/>}/>
            <Route path="videos" element={<Videos/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path='donate' element={<Donate/>}/>
            <Route path="referenceTables" element={<ReferenceTable/>}/>
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
