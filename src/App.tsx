import React from 'react';
import './App.css';
import { Layout } from './components/Layout';
import { ThemeProvider } from './components/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Layout />
      </div>
    </ThemeProvider>
  );
}

export default App;
