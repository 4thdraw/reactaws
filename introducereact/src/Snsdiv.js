import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram , faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons'


const Snsdiv = () => {
  return (
    <div className='position-absolute'>
      <ul>
        <li>
          <a href='' >            
            <FontAwesomeIcon icon={faGithub} />
            <span className='visually-hidden'>깃허브</span>
          </a>
        </li>
        <li>
          <a href='' >
            <FontAwesomeIcon icon={faShare} />         
            <span className='visually-hidden'>티스토리</span>
          </a>
        </li><li>
          <a href='' >         
           
            <FontAwesomeIcon icon={faInstagram} />
            <span className='visually-hidden'>인스타그램</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Snsdiv