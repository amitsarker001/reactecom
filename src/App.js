import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import MasterLayout from './layouts/admin/MasterLayout'

const App = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/admin/dashboard" element={<MasterLayout/>}/>
        </Routes>
    </Router>
  );
}

export default App;