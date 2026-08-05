import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './src/layouts/RootLayout'
import Home from './src/pages/Home'
import About from './src/pages/About'
import Services from './src/pages/Services'
import Contact from './src/pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App