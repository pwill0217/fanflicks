import React from 'react';
import '../pages/aboutStyles.css'
/**
 * This is the about page.
 * @returns A div with a class of wrapper. Inside of that div is a div with a class of about_card.
 * Inside of that div is a div with a class of container_copy. Inside of that div is a h3, h1, and p.
 */
const About = () => {
  return (
    <div class="wrapper">
  <div class="about_card">
    
    <div class="container_copy">
      <h3>About FanFlicks</h3>
      <h1>FanFlicks</h1>
      <p>Founded in 2022, here at FanFlicks, we post Fan Films that span many genres. All credit goes to the directors of the FanFilms. We hope to continue to post more Fanfilms that are high quality. </p>
    </div>
  </div>
</div>
    
  );
};
export default About;

