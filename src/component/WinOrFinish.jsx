

export default function Message({finished, rematch}) {
  return(
    <div className="message" >
      <h1>Game Over !</h1>
      <p>( {finished} ) won !</p> 
      <button
        onClick={rematch}
      >Reactch !</button>
    </div>
  )
}