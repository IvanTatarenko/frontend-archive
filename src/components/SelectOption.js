import React, { Component, useState, useEffect } from 'react';

export default function SelectOption(props) {
  
    const [counts, setCounts] = useState(10);
    
    function changeSelect(event) {
      setCounts(event);
    }

    

    return (
        <div>
            <p>{counts}</p>
        
        <select value={value} onChange={changeSelect(parseInt(value, 10))}>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>
      </div>
    );
  
  
}