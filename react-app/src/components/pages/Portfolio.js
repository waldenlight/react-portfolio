import React from 'react';

const styles = {
  imageStyle: {
    width: '300px',
  },
};

export default function Portfolio(props) {
  return (
    <ul className="list-group">
      {props.projects.map(project => (
        <li className="list-group-item" key={project.id}>
          <a href={project.url}>{project.name}</a> - {project.description} - <a href={project.repo}>repo</a>
          <br></br>
          <img style={styles.imageStyle} alt={project.name} src={project.image}></img>
        </li>
      ))}
    </ul>
  );
}
