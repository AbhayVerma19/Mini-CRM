import React from 'react';
import { useLocation } from 'react-router-dom';
import './audienceList.css'

function AudienceList() {
  const location = useLocation();
  console.log(location.state)
  const {audience}  = location.state;
  console.log(audience)

  return (
        
    <div className="audience-list">
      <h2 className="audience-list__heading">Audience List</h2>
      <ul className="audience-list__items">
        {audience.map((item, index) => (
          <li key={index} className="audience-list__item">
            <strong className="audience-list__label">Name:</strong> {item.name}<br />
            <strong className="audience-list__label">Email:</strong> {item.email}<br />
            <strong className="audience-list__label">Total Spends:</strong> {item.totalSpends}<br />
            <strong className="audience-list__label">Visits:</strong> {item.visits}<br />
            <strong className="audience-list__label">Last Visit:</strong> {item.lastVisit}<br />
          </li>
        ))}
      </ul>
    </div>
    
  );
}

export default AudienceList;