import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from './Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import HotBooks from './pages/HotBooks';
import Search from './pages/Search';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminTools from './pages/AdminTools';
import Book from './pages/Book';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="browse" element={<Browse />}/>
          <Route path="hotBooks" element={<HotBooks />}/>
          <Route path="search" element={<Search />}/>
          <Route path="about" element={<About />}/>
          <Route path="contact" element={<Contact />}/>
          <Route path="admin" element={<AdminTools />}/>
          <Route path="book" element={<Book />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);