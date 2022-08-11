import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import User from "./User";
import { useLocation, useNavigate, useParams, Link } from "react-router-dom";
import Table from "react-bootstrap/Table";



function App() {
    const usenavigate=useNavigate();
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://reqres.in/api/users?page=2')
    .then((response) =>{
        setData(response.data.data);
    })
  },[]);




  return (
    <>
      <Table striped bordered hover>
        <tbody>
          {data.map((item) => (
            <tr
              className="text-center"
              key={item.id}
              onClick={() =>
                usenavigate(`../user/${item.id}`, { state: { object: item } })
              }
            >
              <td> {item.first_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
