import './App.scss'
import WebHeader, { type NavItem } from './component/header';
import Slider from './component/slider';
import WebAbout from './component/about';

const navLinks : NavItem[] = [
    { id: 1, itemText: 'home', href: '/' },
    { id: 2, itemText: 'shop', href: '/' },
    { id: 3, itemText: 'about', href: '/' },
    { id: 4, itemText: 'contact', href: '/' }
];

function App() {

  return (
    <>
      <WebHeader navList={navLinks}/>
      <main>
        <Slider/>
        <WebAbout/>
      </main>
    </>
  )
}

export default App
