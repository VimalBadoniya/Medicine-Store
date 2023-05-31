import React from "react";


const AllMedicine = async() => {
  let Medicines;
  await fetch(
    "https://crudcrud.com/api/9a8c089c0d7b4b2cbdd4b2081e93afe0/AllMedicines"
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      console.log(data);
       Medicines = data ;
    })
    .catch((error) => {
      console.log(error);
    });
  
  
  const addToCartHandler = (medicine)=>{}
  return (
    <table>
      <thead>
        <tr>
          <td>Medicine Name</td>
          <td>Price</td>
          <td>In Stock</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {Medicines.map((med) => {
          return(
          <tr key={med._id}>
            <td>{med.name}</td>
            <td>{med.price}</td>
            <td>{med.quantity}</td>
            <td>
              <form>
                <input type="number" defaultValue={1} min={1} />
                <button onClick={()=>{addToCartHandler(med)}}>Add to Cart</button>
              </form>
            </td>
          </tr>);
        })}
      </tbody>
    </table>
  );
};

export default AllMedicine;
