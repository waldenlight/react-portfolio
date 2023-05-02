import React from 'react';

const styles = {
    footerStyle: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#8E44AD',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px'
    },
    ulStyles: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    liStyles: {
        margin: '0px 10px',
        listStyleType: 'none',
    },
    anchorStyles: {
        textDecoration: 'none',
        color: 'white',
    }
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage }) {
    return (
        <div style={styles.footerStyle}>
            <h4>{currentPage} Page</h4>
            <h5>Walden Light</h5>
            <div style={styles.ulStyles}>
                <p style={styles.liStyles}><a style={styles.anchorStyles} href='https://github.com/waldenlight'>GitHub</a></p>
                <p style={styles.liStyles}><a style={styles.anchorStyles} href='https://www.linkedin.com/in/walden-light-102a3321a/'>LinkedIn</a></p>
                <p style={styles.liStyles}><a style={styles.anchorStyles} href='mailto:waldenlight@gmail.com'>Email</a></p>
            </div>
        </div>
    );
}

export default Footer;
