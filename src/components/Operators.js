import React from 'react';
import { operatorLinks } from '../data/faqData';
import './Operators.css';

// Import all logos
import beelineLogo from '../assets/images/logos/beeline-logo.png';
import ucellLogo from '../assets/images/logos/ucell-logo.png';
import mobiuzLogo from '../assets/images/logos/mobiuz-logo.png';
import humansLogo from '../assets/images/logos/humans-logo.png';
import oqLogo from '../assets/images/logos/oq-logo.png';
import uztelecomLogo from '../assets/images/logos/uztelecom-logo.png';

// Map operator keys to their logo images
const operatorLogos = {
  beeline: beelineLogo,
  ucell: ucellLogo,
  mobiuz: mobiuzLogo,
  humans: humansLogo,
  oq: oqLogo,
  uztelecom: uztelecomLogo
};

const Operators = () => {
  return (
    <div className="operators-section">
      <div className="operators-container">
        <h2>Telecom Operators in Uzbekistan</h2>
        <p className="operators-intro">
          Connect with the leading telecommunication providers in Uzbekistan. Click on any operator to visit their official website.
        </p>
        
        <div className="operators-grid">
          {Object.entries(operatorLinks).map(([key, operator]) => (
            <a 
              key={key}
              href={operator.url}
              target="_blank"
              rel="noopener noreferrer"
              className="operator-card"
              style={{
                borderTop: `4px solid ${operator.primaryColor}`
              }}
            >
              <div className="operator-logo" style={{ backgroundColor: operator.primaryColor + '10' }}>
                {operatorLogos[key] ? (
                  <img 
                    src={operatorLogos[key]} 
                    alt={`${operator.name} logo`} 
                    className="logo-image"
                  />
                ) : (
                  <div 
                    className="logo-placeholder"
                    style={{
                      backgroundColor: operator.primaryColor,
                      color: operator.secondaryColor
                    }}
                  >
                    {operator.logoText}
                  </div>
                )}
              </div>
              <div className="operator-info">
                <h3 className="operator-name">{operator.name}</h3>
                <p className="operator-tagline">{operator.tagline}</p>
                <p className="operator-description">{operator.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operators;