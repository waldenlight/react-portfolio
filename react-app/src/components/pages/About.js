import React from 'react';

const styles = {
  imageStyle: {
    width: '300px',
  },
};

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <p>Full-stack web developer seeking an entry-level role as a junior software engineer
        or
        web developer. Earned a certificate in full stack web development from the University of
        Utah
        Professional Education Coding Boot Camp. Eager to get started in software development and
        willing to learn by completing any task where I can be of assistance and contribute to a
        team.
        Strengths in programming, problem-solving, and work ethic.</p>
      <img alt="Walden Light." style={styles.imageStyle} src='https://raw.githubusercontent.com/waldenlight/one-page-portfolio/main/assets/images/profile.jpg'></img>
    </div>
  );
}
