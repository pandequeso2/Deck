import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Cards from './pages/Cards'
import Decks from './pages/Decks'
import Duel from './pages/Duel'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/decks" element={<Decks />} />
          <Route path="/duel" element={<Duel />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App