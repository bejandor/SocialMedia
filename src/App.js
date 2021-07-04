import React, { Component } from 'react';// Импортируем из модуля
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter, Route } from 'react-router-dom';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import News from './components/News/News';
import Friends from './components/Friends/Friends';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          
          <Route path="/dialogs" component={Dialogs}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/friends" component={Friends}/>
          <Route path="/music" component={Music}/>
          <Route path="/news" component={News}/>
          <Route path="/settings" component={Settings}/>
             
        </div>
      </div>
    </BrowserRouter>
        );
}


        export default App;
