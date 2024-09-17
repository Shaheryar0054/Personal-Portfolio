import './App.css';
import { Navbar } from './components/Navbar';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Techstack from './components/Techstack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {

  const router = createBrowserRouter ([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/About",
      element: <About/>
    },
    {
      path: "/Techstack",
      element: <Techstack/>
    },
    {
      path: "/Projects",
      element: <Projects/>
    },
    {
      path: "/Contact",
      element: <Contact/>
    },
  ])
  return (
    <div className="container">
      <Navbar/>
      <RouterProvider router= {router} />
      <Projects />
    </div>
  );
}

export default App;
