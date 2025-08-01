import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedArticles from './components/FeaturedArticles';
import FeaturedTutorials from './components/FeaturedTutorials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-root">
      <Header />
      <Hero />
      <main>
        <FeaturedArticles />
        <FeaturedTutorials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
