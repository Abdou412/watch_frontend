import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import AddWatch from './pages/AddWatch.jsx'
import EditWatch from './pages/EditWatch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/:id"></Route>
        <Route path='/api/watches/'  element={<AddWatch />} />
        <Route path='/api/watches/:id' element={<EditWatch />} />
      </Routes>
    </Router>
  </StrictMode>,
)
