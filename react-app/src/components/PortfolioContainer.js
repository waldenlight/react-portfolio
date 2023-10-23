import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
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
  },
  {
    id: 3,
    name: "Uniquist",
    description: "Find the perfect band name",
    url: "https://immense-earth-43761.herokuapp.com/",
    repo: "https://github.com/bbairdgen/uniquist",
    image: "https://github.com/waldenlight/react-portfolio/blob/main/react-app/images/uniquist.png?raw=true"
  },
  {
    id: 4,
    name: "Another Portfolio",
    description: "Yet another portfolio",
    url: "https://waldenlight.github.io/portfolio/",
    repo: "https://github.com/waldenlight/portfolio",
    image: "https://github.com/waldenlight/portfolio/blob/main/assets/images/bridge.JPG?raw=true"
  },
  {
    id: 5,
    name: "Programming Quiz",
    description: "A programming quiz",
    url: "https://waldenlight.github.io/walle-programming-quiz/",
    repo: "https://github.com/waldenlight/walle-programming-quiz",
    image: "https://user-images.githubusercontent.com/76961678/210656083-6bc8d23f-1720-4feb-ae43-944283462548.png"
  },
  {
    id: 6,
    name: "A password generator",
    description: "A password generator",
    url: "https://github.com/waldenlight/best-password-generator#installation",
    repo: "https://github.com/waldenlight/best-password-generator",
    image: "https://user-images.githubusercontent.com/76961678/208982696-3f873d3d-f069-47fe-b5f7-badfa20871dd.png"
  },
];

const styles = {
  bodyStyles: {
    // backgroundImage: 'url("https://github.com/waldenlight/react-portfolio/blob/main/react-app/images/graphicbg.jpg?raw=true")',
    backgroundSize: 'cover',
    margin: '0',
    width: '100%',
    height: '100%',
  }
};

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('About');

  const renderPage = () => {
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

  document.body.style = 'background: #f5f5f5;';

  return (
    <div style={styles.bodyStyles}>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer currentPage={currentPage} />
    </div>
  );
}
