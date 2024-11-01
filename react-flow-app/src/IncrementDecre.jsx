import { useState } from "react";

function IncrementDecre()
{
    const [count,setcount]=useState(0);

    const increment=()=>{setcount(count+1);}
    
    const decrement=()=>{setcount(count-1);}

    return(
        <>
        <h1>counting the value:{count} </h1>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        </>
    )

}
export default IncrementDecre;