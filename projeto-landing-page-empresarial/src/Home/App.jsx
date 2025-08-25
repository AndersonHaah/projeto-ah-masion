import './App.css'
import Homepage from './pages/homepage/Homepage'
import Moreinfo from './pages/moreinfo/Moreinfo'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'
import Menu from './components/animations/menuhamburguer/Menu/Menu'


function App() {


  return (
    <div className='container-principal'>
      <Menu />
      <Homepage />
      <Moreinfo />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
