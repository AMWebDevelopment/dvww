import React from 'react';
import { BrowserRouter, Routes, Route } from '@vercel/react-router';
import Accueil from './Accueil';
import Latelier from './Latelier';
import Vente from './Vente';
import Contact from './Contact';
import Erreur from './Erreur';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/latelier" element={<Latelier />} />
        <Route path="/vente" element={<Vente />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Erreur />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
