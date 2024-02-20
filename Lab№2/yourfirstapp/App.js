// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header title="Header" />
      <div className="main-content">
        <SideBar title="SideBar" />
        <Content title="Content" />
      </div>
      <Footer title="Footer" />
    </div>
  );
}

export default App;

