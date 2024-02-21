// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Aboutus from "./components/AboutUs";
import Portfolio  from "./components/Portfolio";
import Blog from "./components/Blog";
import Gradient from "./components/Gradient";
import Footer from "./components/Footer";
import './components/style/header.css'
import './components/style/aboutus.css'
import './components/style/portfolio.css'
import './components/style/blog.css'
import './components/style/gradient.css'
import './components/style/footer.css'
import './App.css';


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
      
        <Aboutus />
        <Portfolio  />
        <Blog  />
        <Gradient  />
       
      
      <Footer title="Footer"  menuList={menuList}/>
    </div>
  );
}

export default App;