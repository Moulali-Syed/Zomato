/*
  font awesome-- >
<!-- npm install --save @fortawesome/free-solid-svg-icons  -->
<!-- npm install --save @fortawesome/react-fontawesome  -->
<!--                        Usage                       -->

<!-- import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faCoffee } from '@fortawesome/free-solid-svg-icons';
    <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>  -->

<!--            FontAwesome Brand Icons                     -->
<!-- npm install --save @fortawesome/free-brands-svg-icons -->

<!-- import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
<FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon> -->

      <!-- Styling FontAwesome Icons -->
      <!-- we can add className and style class | we can use color property
      
*/
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
const Fontawesome = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
      <FontAwesomeIcon
        icon={faGithub}
        color="green"
        className="ico"
      ></FontAwesomeIcon>
    </div>
  );
};

export default Fontawesome;
/*
.ico {
  width: 200px;
  height: 200px;
}
*/
