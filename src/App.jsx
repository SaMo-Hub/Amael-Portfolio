import './App.css'
import Navbar from './Components/Navbar'
import ReactLenis from 'lenis/react'
import ProjectsPage from './Projects/ProjectsPage'
import HomePage from './Home/HomePage';
import HomePageWhite from './Home/HomePageWhite';
import ScrollToTop from './Components/ScrollToTop';
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'



function App() {
  const location = useLocation()

 return (
  <>
        {/* Navbar pour naviguer */}
        {/* Définition des routes */}
        {/* <ScrollToTop/> */}
        <AnimatePresence mode='wait'>
        
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} /> {/* Home */}
          <Route path="/white" element={<HomePageWhite />} /> Home
          <Route path="/projects/:id" element={<ProjectsPage />} /> {/* Page Projects */}
        </Routes>
      </AnimatePresence>
      </>
    
  );
}

export default App
