import React from "react";
import Navbar from "./component/Navbar";
import Contacts from "./pages/Contacts";
import Collections from "./pages/Collections";
import Artists from "./pages/Artists";
import Home from "./pages/Home";

import {Route, Routes} from "react-router-dom";
import Views from "./pages/Views";
import Footer from "./component/Footer";

function App() {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
        <Routes>
          <Route path="/artists" element={<Artists/>}></Route>
          <Route path="/collections" element={<Collections/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/view-more" element={<Views/>}></Route>
        </Routes>
        <Footer></Footer>
        
    </div>
    
    </>
  );
}

export default App;
