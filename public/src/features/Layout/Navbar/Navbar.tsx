import { AppShell, NavLink } from "@mantine/core";
import {IconHome} from '@tabler/icons-react';
const Navbar=()=>{
    return(
        <>
         <AppShell.Navbar p="sm">
          <NavLink label="Home" leftSection={<IconHome/>}/>
      </AppShell.Navbar>
        </>
    )
}
export default Navbar;