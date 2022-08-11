import React, { Component, useState, useEffect, useCallback, useMemo,useRef } from "react";

export default function Login() {
  let [name,setName]=useState('');
  let [count,setCount]=useState(0);
  let [list,setList]=useState([]);
   const submitEvent=()=>{
    setList([...list, { name, "count": parseInt(count) }]);
    console.log(typeof count);
    console.log(name);
   }
   const total= useMemo(()=>{
          console.log("re render...!!!");

    const result = list.reduce((item,prov)=>{
      console.log("re render...");
      return item + prov.count;
    },0)
    return result;
   },[list])
    return (
      <div className="container text-center">
        <input
          type="text"
          placeholder="Tên"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <br />
        <input
          type="text"
          placeholder="Số Lượng"
          onChange={(e) => setCount(e.target.value)}
          value={count}
        />
        <br />
        <input type="button" value="add" onClick={submitEvent} />
        <br />
        Total : {total}
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  
}
