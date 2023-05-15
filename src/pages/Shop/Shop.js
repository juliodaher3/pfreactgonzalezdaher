import React, { useState } from "react";



import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import "./Shop.css";

import TextField from "@mui/material/TextField";

import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";

const styles = {
  containerShop: {
    textAlign: "center",
    paddingTop: 20,
  },
};

const initialState = {
  name: "",
  lastName: "",
  city: "",
};

const Shop = () => {
  const [values, setValues] = useState(initialState);
  
  const [purchaseID, setPurchaseID] = useState("");

  const onChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    const docRef = await addDoc(collection(db, "purchases"), {
      values,
    });
    
    setPurchaseID(docRef.id);
    setValues(initialState);
  };

  return (
    <div style={styles.containerShop}>
      <h1>TIENDA</h1>
      <form className="FormContainer" onSubmit={onSubmit}>
        <TextField
          placeholder="Name"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Last Name"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
        />
        <TextField
          placeholder="City"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={onChange}
        />
        <button className="btnASendAction" type="submit">
          ENVIAR
        </button>
      </form>
      {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
    </div>
  );
};

export default Shop;
