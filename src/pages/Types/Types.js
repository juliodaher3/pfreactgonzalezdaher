import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";


import { collection, query, getDocs, where, } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardChinpokomonComponent from "../../components/CardChinpokomonComponent/CardChinpokomonComponent";


const ChinpokomonType = () => {
  const [chinpokomonData, setChinpokomonData] = useState([]);

  let { type } = useParams();

console.log(ChinpokomonType);

  useEffect(() => {
    const getChinpokomons = async () => {
      const q = query(collection(db, "chinpokomon"), where("type", "==", type));
      const docs = [];
      const querySnapshot = await getDocs(q);
      
      querySnapshot.forEach((doc) => {
        
        docs.push({ ...doc.data(), id: doc.id });
      });
      
      setChinpokomonData(docs);
    };
    getChinpokomons();
  }, [type]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Chinpokomon por tipos</h1>
      {chinpokomonData.map((data) => {
        return <CardChinpokomonComponent chinpokomonsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default ChinpokomonType;