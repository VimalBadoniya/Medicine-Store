import React, { useContext } from "react";
import {MedContext} from "../source/Context"

const Cart = (props)=>{
    const ctx = useContext(MedContext);
    console.log(ctx)
    return (
        <React.Fragment>
            <ul>
                <li>Dolo 650    x2    $100</li>
            </ul>
            <div>
                <h2>Total Amount - $100</h2>
                <div>
                    <button onClick={props.onCartClose}>Cancel</button>
                    <button>Order</button>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Cart;