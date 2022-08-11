import "../App.css";
import { useState, useEffect } from "react";

function App() {
  const [arr, setArr] = useState([]);
  const [ourText, setOurText] = useState("");
  const [arrChuDe, setArrChuDe] = useState(["Chủ Đề 1"]);
  const [chude, setChuDe] = useState("");
  const [data, setData] = useState([
    {
      data: [
        " What do you do in your free time?",
        "Who do you spend your free time with?",
        "Do you usually hang out with your friends? How often",
        "Tell me something you did last weekend?",
      ],
      tenchude: "FREETIME ACTIVITIES",
    },
    {
      data: [
        "Tell me something about your school?",
        "How do you go to school everyday?",
        "Do you have a lot of homework after school?",
        "What is your favorite subject at school?",
      ],
      tenchude: "SCHOOL",
    },
    {
      data: [
        "Where do you like going on holiday?",
        "How often do you go on holiday?",
        "Do you always go on holiday to some place?",
        "How do you usually get there?",
      ],
      tenchude: "HOLIDAY",
    },
    {
      data: [
        "What shops do you go to the most?",
        "When do you usually go shopping?",
        "Do you like shopping?",
        "Tell me some online shopping websites that you know?",
      ],
      tenchude: "SHOPPING",
    },
    {
      data: [
        "What types of personal are you?",
        "Tell me about your best friend?",
        "Do you like to live in a big or small family?Why?",
        "What are you going to do in the next ten years?",
      ],
      tenchude: "PERSONAL DETAILS",
    },
    {
      data: [
        "What is the most important event in your life? ",
        "How old can people get a driver’s license?",
        " Is it important to go to the university?",
        "What is the best age to get married?",
      ],

      tenchude: "WAY OF LIFE",
    },
    {
      data: [
        "What usually makes you angry?",
        "Who do you ask for help when you have a problem? ",
        "Do you have common interests with your friends? (If yes, What?)",
        "How do you have fun?",
      ],
      tenchude: "GETTING ON",
    },
    {
      data: [
        "What are your favorite types of food?",
        "What is the most delicious food you have ever eaten?",
        "Is your diet healthy? (How)",
        "Tell me some famous food or drinks in Vietnam?",
      ],
      tenchude: "FOOD",
    },
  ]);
  const [vitri, setVitri] = useState(1);
  const [chudeactive, setChuDeActive] = useState("Chủ Đề 1");

  const msg = new SpeechSynthesisUtterance();

  const speechHandler = (e, msg) => {
    msg.text = e.target.value;
    msg.rate = 1.2;
    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    // if (chudeactive) {
    //   setChuDe(chudeactive);
    // } else {
    //   setChuDe("Chủ Đề 1");
    // }

    // setArrChuDe(data.map((item) => item.tenchude));
    console.log(data[vitri]);
    // data[vitri].data.forEach((item, index) => {
    //   // if (item.tenchude === chudeactive) {
    //     // setVitri(index);
    setArr(data[vitri].data);
    //   // }
    // });
    console.log(arr);
  }, [vitri]);
  function radomChude() {
    var so = Math.floor(Math.random() * 8);
    setVitri(so);
    console.log(vitri);
  }
  return (
    <div className="App text-center">
      <h1>React Text to Speech App</h1>
      <button className="btn btn-danger" onClick={radomChude}>
        Ngẫu Nhiên Chủ Đề
      </button>
      <h2>Tên Chủ Đề: {data[vitri].tenchude}</h2>

      {/* <div className="mb-3">
        <label>Chọn Chủ Đề </label>
        <select
          name="cars"
          className="mx-3"
          onChange={(e) => {
            setChuDe(e.target.value);
            setChuDeActive(e.target.value);
          }}
        >
          {arrChuDe.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
        <div
          className="input-group my-3 text-center"
          style={{ width: "70%", left: "15%" }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Input Text to Speak"
            value={chude}
            onChange={(e) => setChuDe(e.target.value)}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={() => {
              setArrChuDe([...arrChuDe, chude]);
              setData(...data, { tenchude: chude, data: [] });
              setChuDe("");
            }}
          >
            Thêm vào chủ đề
          </button>
        </div>
      </div> */}
      {/* <div className="input-group mb-3" style={{ width: "70%", left: "15%" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Input Text to Speak"
          value={ourText}
          onChange={(e) => setOurText(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => {
            if (data && data.includes(chudeactive)) {
              // setArr(data.get(chudeactive).data);
            } else {
              setData([{ chudeactive: { arr: [] } }]);
            }
            setArr([...arr, ourText]);
            setOurText("");
            data[vitri].data = arr;
          }}
        >
          Thêm đoạn này vào chủ đề
        </button>
      </div> */}
      {arr.map((item, index) => {
        return (
          <div className="my-2">
            <option
              key={index}
              className="btn btn-primary d-block mt-1 mx-5"
              value={item}
              onClick={(e) => speechHandler(e, msg)}
            >
              {index + 1}
            </option>
            <span className="btn btn-success"
              onClick={(e) => {
                e.target.innerHTML = item;
              }}
            >
              View
            </span>
          </div>
        );
      })}
      {/* <input
        type="text"
        value={ourText}
        placeholder="Enter Text"
        onChange={(e) => setOurText(e.target.value)}
      />
      <button onClick={() => speechHandler(msg)}>SPEAK</button> */}
    </div>
  );
}

export default App;
