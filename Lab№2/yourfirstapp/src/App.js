// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import SideBar from './components/sidebar';
import './App.css';
import getId from './components/helper';

const menuList = [
  { text: '+', url: 'https://example.com/menu1' },
  { text: '+', url: 'https://example.com/menu2' },
  { text: '+' },
  { text: '+', url: 'https://example.com/menu4' },
];

function App() {
  return (
    <div className="app">
      <Header title="Header" />
      <div className="main-content">
        <SideBar menuList={menuList} />
        <Content title="Content" />
      </div>
      <Footer title="Footer"  menuList={menuList}/>
    </div>
  );
}

export default App;

const menuItemId = getId('menu-item');
console.log(menuItemId);

const MenuItemId1 = getId('menu-item');
console.log(MenuItemId1);

const MenuItemId2 = getId('menu-item');
console.log(MenuItemId2);

const defaultId = getId();
console.log(defaultId);

const defaultId1 = getId();
console.log(defaultId1);