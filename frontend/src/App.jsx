import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PackagesPage from './pages/PackagesPage';
import GalleryPage from './pages/GalleryPage';
import ContactBookingPage from './pages/ContactBookingPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 pt-32 pb-20 bg-[#121317]">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#e2c399] mb-3">
        404 // NOT FOUND
      </span>
      <h1 className="font-['Syne'] text-4xl sm:text-5xl font-bold uppercase text-[#e3e2e8] mb-4">
        Page Not Found
      </h1>
      <p className="text-sm text-[#d1c5b8] max-w-md mb-8 font-light">
        The requested atelier coordinate does not exist. Please navigate back to our main bays.
      </p>
      <Link
        to="/"
        className="px-8 py-3.5 rounded bg-[#c5a880] text-[#402d0f] font-mono text-xs font-semibold uppercase tracking-wider hover:bg-[#e2c399] transition-colors"
      >
        Return to Atelier Home
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#121317] text-[#e3e2e8] selection:bg-[#c5a880] selection:text-[#513d1d]">
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact-booking" element={<ContactBookingPage />} />
            <Route path="/booking" element={<ContactBookingPage />} />
            <Route path="/contact" element={<ContactBookingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
