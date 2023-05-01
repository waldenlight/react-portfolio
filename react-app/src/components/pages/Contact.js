import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form action="/action_page.php">
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value="John"></input><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname" value="Doe"></input><br></br><br></br>
        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
