import React from 'react';
import Router from "./routes";
import { StateProvider } from "./state/AppContext";

const App = () => {
  return (
    <StateProvider>
      <Router />
    </StateProvider>
  );
};

export default App;
