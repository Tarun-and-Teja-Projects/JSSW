import { AppShell, Avatar, Box, Burger, Group } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
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
          <Avatar color="cyan" radius="xl">MK</Avatar>
          </Box>
        </Group>
        
      </AppShell.Header>
    )
}
export default Header;