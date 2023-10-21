import React from 'react';

const styles = {
  mainDivStyles: {
    margin: "2% 10%",
    padding: '20px 30px',
    backgroundColor: '#A569BD',
    color: 'white',
    textAlign: 'center'
  },
  titleStyles: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  bioStyles: {
    margin: "2% 10%",
    padding: '20px 30px',
    backgroundColor: '#343f3e',
    borderRadius: '10px',
    textAlign: 'left',
  },
  imageStyles: {
    width: '400px',
    height: '300px',
    // border: '0.3rem solid #343f3e',
    borderRadius: '10px',
    objectPosition: '50% 35%',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover'
  },
};

export default function About() {
  return (
    <div style={styles.mainDivStyles}>
      <h1 style={styles.titleStyles}>About Me</h1>
      <div style={styles.bioStyles}>
        <p >Full-stack web developer seeking an entry-level role as a junior software engineer
          or
          web developer. Earned a certificate in full stack web development from the University of
          Utah
          Professional Education Coding Boot Camp. Eager to get started in software development and
          willing to learn by completing any task where I can be of assistance and contribute to a
          team.
          Strengths in programming, problem-solving, and work ethic.</p>
      </div>
      <img alt="Walden Light." style={styles.imageStyles} src='https://github.com/waldenlight/react-portfolio/blob/main/react-app/images/profile.jpg?raw=true'></img>
    </div>
  );
}
