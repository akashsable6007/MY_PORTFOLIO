
import './App.css';
import Navbar from './components/navbar/Navbar';
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Project from './components/projects/Project';
import About from './components/about/About';

function App() {


  return (
    <>
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <About />
    </>
  )
}

export default App
