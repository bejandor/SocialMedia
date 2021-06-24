import React, { Component } from 'react';// Импортируем из модуля
import './App.css';


const App = () => {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://i.pinimg.com/736x/86/46/2d/86462d25d7919adad32ce94285060cbe.jpg" />
      </header>

      <nav className="nav">
        <div>
          <a href="#">Profile</a>
        </div>
        <div>
          <a href="#">Messages</a>
        </div>


        <div>
          <a href="#">Music</a>
        </div>

        <div>
          <a href="#">Settings</a>
        </div>

      </nav>

      <div className="content">
        <img src="https://sun9-24.userapi.com/impg/o36MGhZJEJ9KT_JMsOUrrJ51dgeTJQYDTe50zw/mc-3vmwh1c8.jpg?size=894x652&quality=96&proxy=1&sign=8928faad6f96db7ab9516c8b4f279dc6" />


        <div>
          avatar and description
        </div>

        <div>
          My posts
          <div>
            New posts
          </div>
        </div>

        <div>
          <div>
            Post 1
          </div>

          <div>
            Post 2
          </div>
        </div>

      </div>
    </div>
  );
}


export default App; 
