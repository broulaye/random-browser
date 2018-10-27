import React from 'react'

import './styles.css';

import chromeLogo from '../../img/Chrome.png';
import edgeLogo from '../../img/Edge.png';
import fireFoxLogo from '../../img/Firefox.png';
import ieLogo from '../../img/IE11.png';
import safariLogo from '../../img/Safari.png';

export default function Legend(props) {
  return (
    <div className="legend">
      <div>
        <img src={chromeLogo} alt="Chrome"/>
        <label>Google Chrome</label>
      </div>
      <div>
        <img src={edgeLogo} alt="Edge"/>
        <label>Edge</label>
      </div>
      <div>
        <img src={fireFoxLogo} alt="Firefox"/>
        <label>Firefox</label>
      </div>
      <div>
        <img src={ieLogo} alt="IEE11"/>
        <label>IE11</label>
      </div>
      <div>
        <img src={safariLogo} alt="Safari"/>
        <label>Safari</label>
      </div>
    </div>
  );
}
