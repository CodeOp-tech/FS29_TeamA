import './App.css'
import { useState } from 'react'

// Routes and pages
import { Routes, Route} from "react-router-dom";
import Frame from './pages/Frame';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';



function App() {

  return (
    <>
      <Routes>
        {/* general route with content that's displayed on all pages */}
        <Route path="/" element={<Frame/>} >
          {/* all page routes go here */}
          <Route path="/" element={<Page1 />} />
          <Route path="/" element={<Page2 />} />
          <Route path="/" element={<Page3 />} />
          <Route path="/" element={<Page4 />} />

        </Route>
      </Routes>
    </>
  )
}

export default App;
