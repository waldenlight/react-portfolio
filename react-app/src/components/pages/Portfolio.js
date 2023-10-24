import React from 'react';

const styles = {
  mainDivStyles: {
    margin: "2% 10%",
    padding: '20px 30px',
    justifyContent: 'center',
    // backgroundColor: '#A569BD',
    color: '#141414'
  },
  liStyles: {
    justifyContent: 'center',
    listStyleType: 'none',
    marginBottom: '20px'
    // backgroundColor: 'black'
  },
  linkStyles: {
    color: '#d71d2d',
  },
  projectStyles: {
    fontWeight: 'bolder',
    margin: '0px 5px'
  },
  imageStyle: {
    width: '80%',
    // border: '0.3rem solid #A569BD',
    margin: '15px 0px',
    borderRadius: '10px',
  }
};

export default function Portfolio(props) {
  return (
    <div style={styles.mainDivStyles}>
      <ul>
        {props.projects.map(project => (
          <li style={styles.liStyles} key={project.id}>
            <span style={styles.projectStyles}><a style={styles.linkStyles} href={project.url}>{project.name}</a> - {project.description} - <a style={styles.linkStyles} href={project.repo}>Repository</a></span>
            <br></br>
            <img style={styles.imageStyle} alt={project.name} src={project.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
