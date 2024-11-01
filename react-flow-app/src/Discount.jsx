import { useState } from "react";

function Discount() {
    const price = 7990;
    const [originalPrice, setOriginalPrice] = useState(price);
    const [discountPrice, setDiscountPrice] = useState(0);
    const [discount,setdiscount]=useState(0);

    const applyDiscount = (percentage) => {
        if (percentage === 10) {
            setDiscountPrice(originalPrice * 0.1);
            setdiscount(percentage);
        } else if (percentage === 30) {
            setDiscountPrice(originalPrice * 0.3);
            setdiscount(percentage);
        } else {
            setDiscountPrice(0);
            setOriginalPrice(0);
        }
    };

  

    return (
        <>
            <h1>ORIGINAL PRICE:$ {originalPrice}</h1>
            <h2>DISCOUNTED PRICE: ${discountPrice}</h2>
            <h2>Discount percient:${discount}</h2>
            <button onClick={() => applyDiscount(10)}>APPLY 10% DISCOUNT</button>
            <button onClick={() => applyDiscount(30)}>APPLY 30% DISCOUNT</button>
            <button onClick={()=> setDiscountPrice(0)}>RESET PRICE</button>
        </>
    );
}

export default Discount;
