import React from 'react';

const styles = {
  mainDivStyles: {
    margin: "20px 150px",
    padding: '20px 30px',
    backgroundColor: '#A569BD',
    color: 'white'
  },
  imageStyles: {
    width: '300px',
    border: '6px solid white'
  },
};

export default function About() {
  return (
    <div style={styles.mainDivStyles}>
      <h1>About Me</h1>
      <p>Full-stack web developer seeking an entry-level role as a junior software engineer
        or
        web developer. Earned a certificate in full stack web development from the University of
        Utah
        Professional Education Coding Boot Camp. Eager to get started in software development and
        willing to learn by completing any task where I can be of assistance and contribute to a
        team.
        Strengths in programming, problem-solving, and work ethic.</p>
      <img alt="Walden Light." style={styles.imageStyles} src='https://raw.githubusercontent.com/waldenlight/one-page-portfolio/main/assets/images/profile.jpg'></img>
    </div>
  );
}
