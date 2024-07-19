import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Map from './component/ItemMap';
import ItemInputBox from './component/ItemInputBox';
import ItemRegister from './pages/ItemRegister';
import ItemMap from './component/ItemMap';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ItemMap/>} />
          <Route path="/item/register" element={<ItemRegister/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
