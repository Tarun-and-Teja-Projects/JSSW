import { AppShell, NavLink  } from "@mantine/core";
import { IconUser, IconUsers, IconHome, IconAffiliate, IconSitemap, IconStack2, IconUserHexagon,IconBrandGooglePhotos,IconVideo, IconCoinRupee, IconAddressBook, IconSettings } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../slices/store";

const Navbar = () => {
  const rolesFromState = useSelector((state: RootState) => state.login.roles);
  const rolesFromSession = sessionStorage.getItem('role');
  
  let loginRole;
  
  if (rolesFromState.length>0) {
      loginRole = rolesFromState; 
  } else if (rolesFromSession) {
      loginRole = rolesFromSession;
  } else {
      loginRole = null;
  }  return (
    <AppShell.Navbar p="sm">
      {loginRole==='jssw' && (
        <>
      <NavLink label="Home" leftSection={<IconHome  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/home"/>
      <NavLink label="Founders" leftSection={<IconUsers  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/founders"/>
      <NavLink label="Events" leftSection={<IconUser  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/events"/>
      <NavLink label="Project Requirements" component={Link} leftSection={<IconStack2 size={'1.3rem'} stroke={1.5}/>} to={'/projectRequirements'}/>
      <NavLink label="About us" component={Link} leftSection={<IconUserHexagon size={'1.3rem'} stroke={1.5}/>} to={'/about'}/>
      <NavLink label="Gallery" component={Link} leftSection={<IconBrandGooglePhotos size={'1.3rem'} stroke={1.5}/>} to={'/gallery'}/>
      <NavLink label="Videos" component={Link} leftSection={<IconVideo size={'1.3rem'} stroke={1.5}/>} to={'/videos'}/>
      <NavLink label="Contact" component={Link} leftSection={<IconAddressBook size={'1.3rem'} stroke={1.5}/>} to={'/contact'}/>
      <NavLink label="Donate" component={Link} leftSection={<IconCoinRupee size={'1.3rem'} stroke={1.5}/>} to={'/donate'}/>
      <NavLink label="Reference Tables" component={Link} leftSection={<IconSettings size={'1.3rem'} stroke={1.5}/>} to={'/referenceTables'}/>

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
