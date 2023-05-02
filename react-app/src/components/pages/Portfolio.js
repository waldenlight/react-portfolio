import React from 'react';

const styles = {
  mainDivStyles: {
    margin: "20px 150px",
    padding: '20px 30px',
    backgroundColor: '#A569BD',
    color: 'white'
  },
  projectStyles: {
    fontWeight: 'bolder'
  },
  imageStyle: {
    width: '300px',
    margin: '10px 0px',
    border: '6px solid #A569BD'
  }
};

export default function Portfolio(props) {
  return (
    <div style={styles.mainDivStyles}>
      <ul className="list-group">
        {props.projects.map(project => (
          <li className="list-group-item" key={project.id}>
            <span style={styles.projectStyles}><a href={project.url}>{project.name}</a> - {project.description} - <a href={project.repo}>repo</a></span>
            <br></br>
            <img style={styles.imageStyle} alt={project.name} src={project.image}></img>
          </li>
        ))}
      </ul>
    </div>
  );
}
