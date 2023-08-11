import{useState}from "react"
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
function App() {
  const [page,setPage]=useState("Home")
  function ChangePage(){
    if(page==="Home"){
      return <Home />
    }
    if (page==="Projects"){
      return  <Projects />
    }
    if (page==="Contact"){
      return <Contact />
    }
  }
  return (
    <div className="App">
      <Navbar />
     {ChangePage()}
    <Footer />

    </div>
  );
}

export default App;
