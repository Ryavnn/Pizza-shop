import './App.css'
import LandingPage from './Pages/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PizzaPage from './Pages/PizzaPage'
import Restaurants from './Pages/Restaurants'
import MakeApizza from './Pages/MakeApizza'
import About from './Pages/About'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} name="home"></Route>
        <Route path='/Pages/PizzaPage' element={<PizzaPage />} name="pizza-page"></Route>
        <Route path='/Pages/About' element={<About />} name="about"></Route>
        <Route path='/Pages/Restaurants' element={<Restaurants />} name="restaurants"></Route>
        <Route path='/Pages/MakeApizza' element={<MakeApizza />} name="make-a-pizza"></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
