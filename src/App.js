import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Map from './component/ItemMap';
import ItemInputBox from './component/ItemInputBox';
import ItemRegister from './pages/ItemRegister';
import ItemMap from './component/ItemMap';
import ItemProgressList from './pages/ItemProgressList'
import TotalItemList from './pages/TotalItemList'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<TotalItemList/>} />
          <Route path="/progress" element={<ItemProgressList/>} />
          <Route path="/item/register" element={<ItemRegister/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
