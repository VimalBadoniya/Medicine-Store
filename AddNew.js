import React from "react";

const AddNew = ()=>{
    return (
        <React.Fragment>
            <form>
                <input type="text" name="name" id="name" placeholder="Medicine Name"/>
                <input type="number" name="price" id="price" placeholder="Price"/>
                <input type="number" name="quantity" id="quantity" placeholder="Available Stock Quantity"/>
                <button>Add Medicine</button>
            </form>
        </React.Fragment>
    )
};

export default AddNew;