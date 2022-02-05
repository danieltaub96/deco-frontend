import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DecoClients from "./components/DecoClients";
import MenuBar from "./components/MenuBar";

function App() {

    return (
        <>
            <MenuBar></MenuBar>
            <DecoClients></DecoClients>
        </>
  );
}

export default App;
