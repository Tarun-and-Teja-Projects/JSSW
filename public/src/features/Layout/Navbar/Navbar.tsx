import { AppShell, NavLink  } from "@mantine/core";
import { IconUser, IconUsers, IconHome } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppShell.Navbar p="sm">
      <NavLink label="Home" leftSection={<IconHome  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/home"/>
      <NavLink label="Founders" leftSection={<IconUsers  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/founders"/>
      <NavLink label="About" leftSection={<IconUser  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/contactDetails"/>
      <NavLink label=""/>

    </AppShell.Navbar>
  );
};

export default Navbar;
