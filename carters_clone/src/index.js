import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ChakraProvider, extendTheme } from '@chakra-ui/react';


const theme = extendTheme({
  primary:{
    color:"#444444",
    fontFamily:"PoppinsRegular-AEM",
    fontSize:"11px"
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}> 
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
