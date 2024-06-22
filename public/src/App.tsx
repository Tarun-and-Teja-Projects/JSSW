
import { useDisclosure } from '@mantine/hooks';
import './App.css'
import { AppShell } from '@mantine/core';
import Navbar from './features/Navbar/Navbar';
import Header from './features/Header/Header';

function App() {

  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="sm"
    >
     <Header mobileOpened={mobileOpened} desktopOpened={desktopOpened} toggleMobile={toggleMobile} toggleDesktop={toggleDesktop}/>
      <Navbar/>
      <AppShell.Main>Main</AppShell.Main>
    </AppShell>
  )
}

export default App
