import React from 'react';

const styles = {
    footerStyle: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%'
    },
};

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer({ currentPage }) {
    return (
        <div style={styles.footerStyle}>
            <h4>{currentPage}</h4>
            <h5>Walden Light</h5>
        </div>
    );
}

export default Footer;
