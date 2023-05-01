import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

const projects = [
  {
    id: 1,
    name: "Omen Weather App",
    description: "A responsive app using APIs.",
    url: "https://waldenlight.github.io/omen-weather-app/",
    repo: "https://github.com/waldenlight/omen-weather-app",
    image: "https://user-images.githubusercontent.com/76961678/227419249-7f86174e-3991-434f-b321-b933b0a156f9.png"
  },
  {
    id: 2,
    name: "Social Media MVP",
    description: "A social media MVP made with MySQL.",
    url: "https://weddit.herokuapp.com/",
    repo: "https://github.com/waldenlight/weddit",
    image: "https://raw.githubusercontent.com/waldenlight/omen-weather-app/main/assets/images/london.jpg"
  }
];

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio projects={projects} />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
