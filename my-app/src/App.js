import './App.css';
import { Navbar } from './components/Navbar';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';

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
  ])
  return (
    <div className="container">
      <Navbar/>
      <RouterProvider router= {router} />
    </div>
  );
}

export default App;
