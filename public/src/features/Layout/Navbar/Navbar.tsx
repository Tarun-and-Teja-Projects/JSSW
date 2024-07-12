import { AppShell, NavLink  } from "@mantine/core";
import { IconAddressBook, IconBook2, IconHome } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppShell.Navbar p="sm">
      <NavLink label="Home" leftSection={<IconHome  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/home"/>
      <NavLink label="Mission" leftSection={<IconBook2  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/Mission"/>
      <NavLink label="Contact" leftSection={<IconAddressBook  size={'1.3rem'} stroke={1.5}/>}  component={Link} to="/contactDetails"/>

    </AppShell.Navbar>
  );
};

export default Navbar;
