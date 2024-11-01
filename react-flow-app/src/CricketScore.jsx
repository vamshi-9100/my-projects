import { useState } from "react";

function CricketScore()
{
    const[score,setscore]=useState(0);

    const incone=()=>{setscore(score+1);}
    const inctwo=()=>{setscore(score+2);}
    const incthree=()=>{setscore(score+3);}
    const incfour=()=>{setscore(score+4);}
    const incsix=()=>{setscore(score+6);}

    return(
        <>
        <h1>cricket score:{score}</h1>
        <button onClick={incone}>+1</button>
        <button onClick={inctwo}>+2</button>
        <button onClick={incthree}>+3</button>
        <button onClick={incfour}>+4</button>
        <button onClick={incsix}>+6</button>
        </>
    )
}
export default CricketScore