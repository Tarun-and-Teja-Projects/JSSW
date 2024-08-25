import { AppShell, NavLink  } from "@mantine/core";
import { IconUser, IconUsers, IconHome, IconAffiliate, IconSitemap } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const loginRole=sessionStorage.getItem('role')
  return (
    <AppShell.Navbar p="sm">
      {loginRole==='jssw' && (
        <>
      <NavLink label="Home" leftSection={<IconHome  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/home"/>
      <NavLink label="Founders" leftSection={<IconUsers  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/founders"/>
      <NavLink label="Events" leftSection={<IconUser  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/events"/>
        </>
      )}
      {loginRole === 'admin' && (
<>
<NavLink label="Home" leftSection={<IconHome  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/home"/>
<NavLink label="Organizations" leftSection={<IconAffiliate size={'1.3rem'} stroke={1.5}/> } component={Link} to="/organizations"/>
<NavLink label="Organization Users" leftSection={<IconUsers size={'1.3rem'} stroke={1.5}/>} component={Link} to="/OrganizationUsers"/>
<NavLink label="Organization Sites" leftSection={<IconSitemap size={'1.3rem'} stroke={1.5}/>} component={Link} to={'/OrganizationSites'}/>
</>        
      )}
     


    </AppShell.Navbar>
  );
};

export default Navbar;
