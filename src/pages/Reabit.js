
import React, { Component, useState, useEffect } from 'react';
import DocElement from "../components/DocElement";
import Pagination from "../components/Pagination";

function Reabit() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [counts] = useState(10);
  const [countsInt, setCountsInt] = useState();
  
  useEffect(() => {
    fetch(`http://test1.ua/?counts=${counts}&page=${currentPage}&intAllPages=1`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [currentPage])

 



  if (error) {
    return <div>Помилка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Завантаження...</div>;
  } else {
    return (
      <div>
        <div>Сторінка - {currentPage}</div><div>Кількість записів на сторінці - {counts}</div>
        <div>{countsInt}</div>
        {items.map(item => (
          <DocElement key = {item.id} firstname = {item.firstname} lastname = {item.lastname} />
        ))}
        
        
        <button onClick={() => setCurrentPage(currentPage + 1) }>Next Page</button>
      </div>
      
    );
  }
}



export default class ReabitPage extends Component {
  render() {
    return (
      <main>
          <h1>Репресовані</h1>
          <div>
          <div>{<Reabit />}</div>
          </div>
      </main>
    )
  }
}
