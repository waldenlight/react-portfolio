import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

const styles = {
  mainDivStyles: {
    margin: "2% 8%",
    padding: '20px 30px',
    // backgroundColor: '#A569BD',
    color: '#292929',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  formStyles: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '300px'
  },
  inputStyles: {
    margin: '10px 0px',
    border: 'none',
    padding: '8px 8px',
    borderRadius: '5px',
    width: '80%',
    border: '1.5px solid #292929',
  },
  imageStyle: {
    width: '300px',
    margin: '10px 0px',
    border: '6px solid #A569BD'
  }
};

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      return;
    }

    if (!name) {
      setErrorMessage('No name entered');
      return;
    }

    setEmail('');
  };

  return (
    <div style={styles.mainDivStyles}>
      <h1>Contact Me</h1>
      <form style={styles.formStyles} className="form">
        <input
          style={styles.inputStyles}
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <input
          style={styles.inputStyles}
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="name"
        />
        <input
          style={styles.inputStyles}
          value={message}
          name="message"
          onChange={handleInputChange}
          type="textarea"
          placeholder="message"
        />
        <button style={styles.inputStyles} type="button" onClick={handleFormSubmit}>Submit</button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
