import React from 'react';

const styles = {
  navStyles: {
    backgroundColor: '#292929',
    padding: '10px 0px',
    color: '#f5f5f5',
  },
  headerStyles: {
    margin: '0px 20px'
  },
  navLinkStyles: {
    color: '#f5f5f5',
    textTransform: 'uppercase'
  },
  activeNavLinkStyles: {
    color: '#d71d2d',
    fontWeight: 'bolder',
    textTransform: 'uppercase'
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navStyles}>
      <h2 style={styles.headerStyles}>Walden Light</h2>
      <li className="nav-item" style={styles.navItemStyles}>
        <a style={currentPage === 'About' ? styles.activeNavLinkStyles : styles.navLinkStyles}
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a style={currentPage === 'Portfolio' ? styles.activeNavLinkStyles : styles.navLinkStyles}
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a style={currentPage === 'Resume' ? styles.activeNavLinkStyles : styles.navLinkStyles}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a style={currentPage === 'Contact' ? styles.activeNavLinkStyles : styles.navLinkStyles}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
