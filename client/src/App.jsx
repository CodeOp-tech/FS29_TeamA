import './App.css'
import { useState } from 'react'

// Routes and pages
import { Routes, Route} from "react-router-dom";
import Frame from './pages/Frame';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Login from './pages/Login';



function App() {

  return (
    <>
      <Routes>
        {/* general route with content that's displayed on all pages */}
        <Route path="/" element={<Frame/>} >
          {/* all page routes go here */}
          <Route path="/" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />
          <Route path="/Page4" element={<Page4 />} />
          <Route path="/Login" element={<Login />} />

        </Route>
      </Routes>
    </>
  )
}

export default App;
