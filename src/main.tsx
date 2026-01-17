import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home.tsx'
import Resources from './pages/resources/Resources.tsx';
import References from './pages/references/References.tsx';
import ContactUs from './pages/contact-us/ContactUs.tsx';
import Events from './pages/events/Events.tsx';

import ScrollToTop from './components/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/references" element={<References />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
