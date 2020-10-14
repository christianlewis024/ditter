import React from 'react';
import './App.css';
import Sidebar from "./Sidebar"
import Feed from "./Feed.js"
import Widgets from "./Widgets.js"
import Post from "./Post"

function App() {
  return (
    <div className="app">    
    <Sidebar/>
    <Feed/>  
    <Widgets/>
    </div>
  );
}

export default App;
