import React from 'react';

const authContext = React.createContext({
  authenticated: false,
  login: () => {}
}); //js obj that can be passed wher eyou want it without using props



export default authContext;