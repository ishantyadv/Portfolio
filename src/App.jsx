import About from "./component/About"
import Contact from "./component/Contact"
import Education from "./component/Education"
import Experience from "./component/Experience"

import Home from "./component/Home"
import NavBar from "./component/NavBar"
import Project from "./component/Project"
import SocialLinks from "./component/SocialLinks"


function App() {
  
  return (
   <div>
    <NavBar/>
    <Home/>
     <About/>
     <Education/>
     <Experience/>
     <Project/>
     <Contact/>
    <SocialLinks/>
   </div>
  )
}

export default App
