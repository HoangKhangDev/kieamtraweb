import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function App() {
  let [object, setObject] = useState({});
  let location = useLocation();
  let navigate = useNavigate();
  // let { id }: { id: string } = useParams();
  // setTimeout(()=>{
  //   navigate(-1)
  // },5000)

  useEffect(() => {
    setObject(location.state.object);

  }, []);

  return (
    <>
      <img src={object.avatar} alt="" />
      <h5>{object.first_name}</h5>
      <h6>{object.email}</h6>
      <button
        className="btn btn-primary border p-2"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </>
  );
}
export default App;
