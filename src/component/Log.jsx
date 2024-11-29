import {useState} from 'react';

export default function Log({moveMant}) {

  console.log(moveMant);
  
  return(
    <ul >
      {/* {...moveMant.map((inner,i)=>  <li>{inner[i]}</li>)} */}
    </ul>
  )
}