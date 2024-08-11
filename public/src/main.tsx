import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {  MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { Provider } from 'react-redux'
import { store } from './slices/store.ts';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider>
      <Notifications position='top-right'/>
     <Provider store={store}>
    <App />
    </Provider>
   </MantineProvider>
  </React.StrictMode>,
)
