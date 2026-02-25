import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'

import MorphingSection from './components/sections/MorphingSection/MorphingSection'
import MaskSection from './components/sections/MaskSection/MaskSection'
import InteractiveFadeBG from './components/InteractiveFadeBG/InteractiveFadeBG'
import Header from './components/Header/Header'
import MovingSection from './components/sections/MovingSection/MovingSection'
import GlobalFilters from './commonStyles/GlobalFilters'

function App() {

  return (
    <main>
      <GlobalFilters/>
      <Header />
      
      <Routes>
        {/* Редирект с главной на морфинг или любую другую страницу */}
        <Route path="/" element={<Navigate to="/morphing" />} />
        
        <Route path="/morphing" element={<MorphingSection />} />
        <Route path="/moving" element={<MovingSection/>} />
        <Route path="/mask" element={<MaskSection/>} />
 
        <Route path="*" element={<Navigate to="/morphing" />} />
      </Routes>

      <InteractiveFadeBG/>
    </main>
  )
}

export default App
