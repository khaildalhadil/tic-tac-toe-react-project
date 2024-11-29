import {useState} from 'react';
import Header from './Header';
import Log from './Log.jsx';
import {WINNING_COMBINATIONS} from './WinningCombinatins.js';
import WinOrFinish from './WinOrFinish.jsx';

function App() {
  
  const [focus, setFocus] = useState(1);
  const [xOrO, setxOrO] = useState('X');
  // const [hasWinner, setHaswinner] = useState(false);
  const startGame = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]
  const [init, setInit] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ])

  let finished = null;

  for(const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = init[combination[0].row][combination[0].column];
    const secondSquareSymbol = init[combination[1].row][combination[1].column];
    const thirdSquareSymbol = init[combination[2].row][combination[2].column];

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol == thirdSquareSymbol) {
      finished = firstSquareSymbol;
    }
  }

  function rematch() {
    setInit(startGame);
    finished = null;
    setxOrO('X');
  }

  return (
    <div className="bg" >
      <div className="content_all" >

      <Header />

        <div className="contener" >
          <div className="header_contener" >
            <TopBtn 
              xoro={xOrO} 
              setxoro={setxOrO} 
              key={"X"} 
              Numfocus={focus} 
              type="X" 
              plearsnum="you" />

            <TopBtn 
              key={"O"} 
              xoro={xOrO} 
              setxoro={setxOrO}
              Numfocus={focus} 
              type="O" 
              plearsnum="player 2" />
          </div>
          <p className='xoro' >{xOrO}</p> 
          {finished && <p><WinOrFinish finished={finished} rematch={rematch} /></p>}
          <BodyOfTicTacToe init={init} setInit={setInit} setxOrO={setxOrO} xOrO={xOrO}  />
          <Log moveMant={init} />
        </div>

      </div>
    </div>
  );
}

function TopBtn({type, plearsnum, Numfocus, setxoro, xoro}) {

  
  const [edit, setEdit] = useState(false);
  const [playerName, setPlayerName] = useState("Type Names");

  return(
    <div className={`input_btn_edit ${type == xoro && "focus"}`}>
      
      {type == xoro && <p className='play' >Your turn</p>}
      <input
        className={`${!edit ? "noTouch": "focus"}`}
        value={playerName}
        onChange={(e)=> setPlayerName(e.target.value)}
      />
      <span>{type}</span>
      <button 
        onClick={()=> setEdit((e)=> !e)}
      >
        {!edit ? 'Edit': 'Save'}
      </button>
    </div>
  )
}

function BodyOfTicTacToe({setxOrO, xOrO, init, setInit}) {



  const [finshTheGame, setFinshTheGame] = useState(false);

  function handleChangeBtn(row, col) {

    const updateArray = [
      ...init.map(inerrArray => [...inerrArray])
    ]

    // const win = [
    //   ...init.map((inerr,i)=> console.log(inerr))
    // ]
    // console.log(win);

    // if ()

    // if (finshTheGame) {
    //   alert('Finish the game');
    //   return;
    // }

    if (updateArray[row][col] !== null) {
      return;
    }

    const checkIfGameOver = 
    [
      ...init.map((inerrArray, inerI) => [...inerrArray]).
        map((el, i) => el.map(l=> l !== null? 
          setFinshTheGame(true): setFinshTheGame(false)))
    ]



    updateArray[row][col] = xOrO;
    setInit(updateArray);
    setxOrO(()=> xOrO === "X" ? "O": "X");
  }
  // console.log()

  return(
    <ul className='bodyOfGame' >
      {
        init.map((row, rowIndexz) => {
          return(
          <li key={rowIndexz}>
            <ol> 
                {
                  row.map((col, colIndex) => {
                    return(
                    <li>
                      <button 
                        onClick={(e)=> handleChangeBtn(rowIndexz, colIndex)}
                        key={colIndex} >
                      {col}</button>
                    </li>
                    )
                  })
                }
            </ol>
          </li>
          )
        })
      }
    </ul>
  )
}


function Box({e}) {
  return(
    <li>{e}</li>
  )
}

export default App;
