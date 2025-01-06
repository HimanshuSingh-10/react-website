import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom"
import NavBar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
import Testimonial from './components/Testimonial';
import './App.css';
import './index.css';
import About from './components/About';
import Projects from './components/Projects';
import Contact from "./components/Contact";
import Footer from "./components/Footer"; 

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Navigate to="/Himanshu" />, 
    },
    {
     path: "/:username",
     element: (
      <div>
      <NavBar />
      <Carousel />
      <div className="container myCard">
        <div className="row">
          <Card image="src/images/card1.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, assumenda Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias officiis, saepe voluptatum distinctio et numquam?" />
          <Card image="src/images/card2.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, assumenda, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, aliquid!, Lorem, ipsum." />
          <Card image="src/images/card3.jpg" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, assumenda, Lorem ipsum dolor sit amet consectetur, Lorem, ipsum." />
        </div>
        <Testimonial />
      </div>
      <Footer/>
    </div>
     )
    },
    {
      path:"/about/:username",
      element: (
      <div>
        <NavBar/>
        <Carousel />
         <About/>
         <Footer/>
        
      </div>
      )
    },

    {
      path:"/projects/:username",
      element:(
      <div>
        <NavBar/>
        <Carousel />
        <Projects/>
        <Footer/>

      </div>
      )
    },
    
    {
      path:"/contact/:username",
      element: (
      <div>
        <NavBar/>
        <Carousel />
        <Contact/>
        <Footer/>

      </div>
      )
    },
    

  ]
)

function App() {
  return (
    <div>
        <RouterProvider router={router}/>
      </div>
    
  )
}

export default App;