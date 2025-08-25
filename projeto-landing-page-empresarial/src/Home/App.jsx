import './App.css'
import Homepage from './pages/homepage/Homepage'
import Moreinfo from './pages/moreinfo/Moreinfo'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Footer from './pages/footer/Footer'


function App() {


  return (
    <div className='container-principal'>
      <Homepage />
      <Moreinfo />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
