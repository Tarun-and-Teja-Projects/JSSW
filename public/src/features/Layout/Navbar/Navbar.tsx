import { AppShell, NavLink as MantineNavLink } from "@mantine/core";
import { IconHome } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppShell.Navbar p="mt">
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <MantineNavLink label="Home" leftSection={<IconHome />} className="" />
      </NavLink>
    </AppShell.Navbar>
  );
};

export default Navbar;
