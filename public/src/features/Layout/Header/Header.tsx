import { AppShell, Avatar, Box, Burger, Group, Menu, rem } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import { IconLogout,  IconPhoto } from "@tabler/icons-react";
interface HeaderProps{
    mobileOpened:boolean;
    desktopOpened:boolean;
    toggleMobile:()=>void;
    toggleDesktop:()=>void;
}
const Header:React.FC<HeaderProps>=({mobileOpened,desktopOpened,toggleMobile,toggleDesktop})=>{
    
    return(
        <AppShell.Header>
        <Group h="100%" px="sm">
          <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
          <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
          <MantineLogo size={30} />
            <Box ml={'auto'}>
            <Menu shadow="md" width={200}>
      <Menu.Target>
          <Avatar color="cyan" radius="xl">MK</Avatar>
          </Menu.Target>
          <Menu.Dropdown>
      
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Profile
        </Menu.Item>
       

        <Menu.Divider />
        <Menu.Item
          color="red"
          leftSection={<IconLogout style={{ width: rem(14), height: rem(14) }} />} >
          logout
        </Menu.Item>
      </Menu.Dropdown>

          </Menu>
          </Box>
        </Group>
        
      </AppShell.Header>
    )
}
export default Header;