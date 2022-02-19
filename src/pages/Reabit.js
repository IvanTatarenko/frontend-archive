
import React, { Component, useState, useEffect } from 'react';
import DocElement from "../components/DocElement";
import Pagination from "../components/Pagination";
import SelectOption from '../components/SelectOption';



function Reabit() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [counts, setCounts] = useState(10);
  const [intAllcounts, setIntAllcounts] = useState();
  
  useEffect(() => {
    fetch(`http://test1.ua/?counts=${counts}&page=${currentPage}&intAllPages=1`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
          setIntAllcounts(result.counts);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [currentPage])


 
  


  const paginnn = pageNum => setCurrentPage(pageNum);
  if (error) {
    return <div>Помилка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Завантаження...</div>;
  } else {
    return (
      <div>
        <div>Сторінка - {currentPage}</div>
        <div>Кількість записів на сторінці - 
        <SelectOption />
        </div>
        
        {items.map(item => (
          <DocElement key = {item.id} firstname = {item.firstname} lastname = {item.lastname} />
        ))}
        <Pagination 
        counts = {counts} 
        paginnn = {paginnn}
        intAllcounts = {intAllcounts}
        />
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
          {<Reabit />}
          </div>
      </main>
    )
  }
}
