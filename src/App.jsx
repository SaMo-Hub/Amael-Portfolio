import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './Components/Navbar'
import ReactLenis from 'lenis/react'
import ProjectsPage from './Projects/ProjectsPage'
import HomePage from './Home/HomePage';
import HomePageWhite from './Home/HomePageWhite';
import ProjectsPageWhite from './Projects/ProjectsPageWhite';

function App() {

 return (
    <section className="text-white font-mark bg-black">
      <Router>
        {/* Navbar pour naviguer */}

        {/* Définition des routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* Home */}
          <Route path="/white" element={<HomePageWhite />} /> {/* Home */}
          <Route path="/projects/:id" element={<ProjectsPage />} /> {/* Page Projects */}
          <Route path="/projectswhite/:id" element={<ProjectsPageWhite />} /> {/* Page Projects */}
        </Routes>
      </Router>
    </section>
  );
}

export default App
