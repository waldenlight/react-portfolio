import React from 'react';

const styles = {
    mainDivStyles: {
        margin: "2% 10%",
        padding: '20px 30px',
        backgroundColor: '#A569BD',
        color: 'white'
    },
    anchorStyles: {
        color: 'white'
    },
    imageStyle: {
        width: '80%',
        border: '0.3rem solid #A569BD',
        margin: '10px 0px',
    }
};

export default function Resume() {
    return (
        <div style={styles.mainDivStyles}>
            <h1><a style={styles.anchorStyles} href='https://docs.google.com/document/d/1GSe6eq7my1bz4G9xNdjcqu5d4ITHPUhMZL1B0gTZp-s/edit?usp=sharing'>Resume</a></h1>
            <p>
                Full-stack web developer seeking an entry-level role as a junior software engineer or web developer.  Pursuing a degree in computer science from the University of Colorado and will graduate in Spring 2026. Also, earning a certificate in full stack web development from the University of Utah Professional Education Coding Boot Camp that will be completed in May 2023. Passionate about software and willing to complete any task where I can contribute to the team.
            </p>
            <h2>Skills</h2>
            <p>JavaScript ES6+, CSS3, HTML5, SQL, NoSQL, GitHub, MongoDB, MySQL, Express, React, Node, Handlebars, jQuery, Bootstrap, Python, Django</p>
        </div>
    );
}
