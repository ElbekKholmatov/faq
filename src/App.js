import React from 'react';
import Header from './components/Header';
import Operators from './components/Operators';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChatDialog from './components/ChatDialog';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Operators />
        <FAQ />
      </main>
      <Footer />
      <ChatDialog />
    </div>
  );
}

export default App;