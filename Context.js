import React from "react";

export const MedContext = React.createContext({
  AllMedicines: [],
  CartMedicines: [],
});

let Medicines ;
const getMedicines = async () => {
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
};

const ContextProvider = (props) => {
   //getMedicines();

  const contextObj = {
    AllMedicines: Medicines,
    CartMedicines: [],
  };
  return (
    <MedContext.Provider value={contextObj}>
      {props.children}
    </MedContext.Provider>
  );
};

export default ContextProvider;
