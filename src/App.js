import "./styles.css";
import { useState } from "react";
import Heading from "./components/Heading";
import Restart from "./components/Restart";
const react = require("react");
function Square({ value, onSquareclick }) {
  return (
    <button className="square" onClick={onSquareclick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xisnext, setnext] = useState(true);
  const [click, setvalue] = useState(Array(9).fill(1));
  let check = winner(click);
  let msg;
  if (check != "1") {
    msg = check + " is the winner";
  } else {
    msg = (xisnext ? "X" : "O") + " is next to move";
  }
  function clicked(i) {
    const arr = click.slice();
    if (arr[i] != "1" || check != "1") {
      return;
    }
    if (xisnext) {
      arr[i] = "X";
    } else {
      arr[i] = "O";
    }
    setnext(!xisnext);
    setvalue(arr);
  }
  return (
    <>
      <Heading />

      <div className="container">
        <div className="status">{msg}</div>
        <div className="table">
          <div className="row">
            <Square value={click[0]} onSquareclick={() => clicked(0)} />
            <Square value={click[1]} onSquareclick={() => clicked(1)} />
            <Square value={click[2]} onSquareclick={() => clicked(2)} />
          </div>
          <div className="row">
            <Square value={click[3]} onSquareclick={() => clicked(3)} />
            <Square value={click[4]} onSquareclick={() => clicked(4)} />
            <Square value={click[5]} onSquareclick={() => clicked(5)} />
          </div>
          <div className="row">
            <Square value={click[6]} onSquareclick={() => clicked(6)} />
            <Square value={click[7]} onSquareclick={() => clicked(7)} />
            <Square value={click[8]} onSquareclick={() => clicked(8)} />
          </div>
        </div>
        <Restart />
      </div>
    </>
  );
}
function winner(click) {
  const places = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];
  let j = 1;
  for (var i = 0; i < places.length; i++) {
    const [a, b, c] = places[i];
    if (click[a] && click[a] === click[b] && click[b] === click[c]) {
      return click[a];
    }
  }
  
  return "1";
}
