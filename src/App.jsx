import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage';
import IphonePage from './pages/IphonePage';
import AirpodPage from './pages/AirpodPage';
import MackbookPage from './pages/MackbookPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/explore' element={<ExplorePage/>}/>
          <Route path='/iphone' element={<IphonePage/>}/>
          <Route path='/airpod' element={<AirpodPage/>}/>
          <Route path='/macbook' element={<MackbookPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
