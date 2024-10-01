import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer'
import Marquees from './components/Marquees'
import StripesMain from './components/StripesMain'
import Navbar from './components/topBar/Navbar'
import Products from './components/topBar/Products'
import Work from './components/Work'

import LocomotiveScroll from 'locomotive-scroll';



function App() {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    
      <div className='w-full  text-white  bg-zinc-800'>
      
     <Navbar/>
     <Work/>
     <StripesMain/>
     <Products/>
     <Marquees/>
     <Cards/>
     <Footer/>

    </div>
  )
}

export default App
