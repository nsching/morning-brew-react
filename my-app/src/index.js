import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import Logo from './Logo';
import TopMenu from './TopMenu';
import MiddleImage from './MiddleImage';
import BottomFooter from './BottomFooter';

const App = () => (
  <StrictMode>
    <Logo />
    <TopMenu />
    <MiddleImage />
    <BottomFooter />
  </StrictMode>
);

const root = createRoot(document.getElementById('root'));
root.render(<App />);
