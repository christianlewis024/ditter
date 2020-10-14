import React from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Feed from "./Feed.js"

function App() {
  return (
    <div className="app">    
    <Sidebar/>
   <Feed/>
    {/* widgets - right hand side components and extra functionality*/}
    </div>
  );
}

export default App;
