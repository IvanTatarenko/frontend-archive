import React, { Component, useState, useEffect } from 'react';

export default function pagination(props) {
  function Pagin() {
    const pageNumber = [];
    for (let i = 1; i <= Math.ceil(parseInt(props.intAllcounts, 10) / props.counts); i++){
      pageNumber.push(i);
    }
    return (
      <div>
        <ul className='pagin'>
        {
          pageNumber.map(number => (
            <li className='pagin' key={number}>
              <button onClick={() => props.paginnn(number)}>{number}</button>
            </li>
          ))
        }
        </ul>
      </div> 
    );
  }
  return (
      <div className='pagination'>
      <Pagin />
      </div>
  )
}