import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Aboutus from "./sections/Aboutus"
import Hero from "./sections/Hero"
import Joinclub from "./sections/Joinclub"
import Partner from "./sections/Partner"
import Products from "./sections/Products"
import Tokenomic from "./sections/Tokenomic"


function App() {


  return (
    <>
     <Navbar/>

     <div>
      <Hero/>
     </div>

     <div className=" mt-8">
      <Aboutus/>
     </div>

     <div className=" mt-8">
      <Products/>
     </div>
     <div className=" mt-8 ">
      <Partner/>

     </div>

     <div className=" mt-8 ">
  <Tokenomic/>

     </div>

     <div className=" mt-4">
      <Joinclub/>
     </div>

     <div className=" ">
     <img src="images/foot.png" alt="" className=" mx-auto" />
      <Footer/>

     </div>
    </>
  )
}

export default App
