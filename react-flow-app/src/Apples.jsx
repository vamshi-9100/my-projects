import { useState } from "react";

function Apples()
{
    const [apples,setapples]=useState(0);



    return(
        
        <>
        <h1>Number Of Apples  :{apples}</h1>
        {apples===0?(
            <p>no apples left!</p>
        ):(
            <p>great! you have some apples.</p>
        )
        }
        <p></p>
        <button onClick={()=>{setapples(apples+1)}}>add 1 apple</button>
        <button onClick={()=>{apples>0&&setapples(apples-1)}}>remove 1 apple</button>
        <button onClick={()=>{setapples(0)}}>reset</button>

        </>
    )
}
export default Apples;