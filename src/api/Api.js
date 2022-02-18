import React, {useState, useEffect} from "react";



function Api(){

    const [t1, setT1] = useState('');

    function clickHandler(){
        fetch("http://test1.ua", {
          method : 'POST',
          header : {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body : JSON.stringify({action : 1})
        })
        .then (res => res.text())
        .then (res => {
            console.log(res);
            setT1(res);
        })
    }
    clickHandler();

}

export default Api;