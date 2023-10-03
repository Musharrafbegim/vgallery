import React from "react";
import Navbar from "./component/Navbar";
import Contacts from "./pages/Contacts";
import Collections from "./pages/Collections";
import Artists from "./pages/Artists";
import {Route, Routes, Router} from "react-router-dom";
import Views from "./pages/Views";
import Footer from "./component/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import HomeRegister from "../src/pages/HomeRegister"
import Home from "../src/pages/Home"

function App() {
  return (
    <>
     <div className="App">
       <Navbar></Navbar>
         <Routes>
           <Route path="/artists" element={<Artists/>}></Route>
           <Route path="/collections" element={<Collections/>}></Route>
           <Route path="/" element={<HomeRegister/>}></Route>
           <Route path="/contacts" element={<Contacts/>}></Route>
           <Route path="/view-more" element={<Views/>}></Route>
           <Route path="/signup" element={<Signup/>}></Route>
           <Route path="/login" element={<Login/>}></Route>
           <Route path="/signup" element={<Signup/>}/>
           <Route path="/login" element={<Login/>}/>
           <Route path="/home" element={<Home/>}/>

         </Routes>
         <Footer></Footer>
        
     </div>
    
     </>
        
    );
}

export default App;
