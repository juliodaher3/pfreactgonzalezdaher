import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// FIRBASE - FIRESTORE
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardChinpokomonComponent from "../../components/CardChinpokomonComponent/CardChinpokomonComponent";

// COMPONENTS

const ChinpokomonType = () => {
  const [chinpokomonData, setChinpokomonData] = useState([]);

  let { type } = useParams();

console.log(ChinpokomonType);

  useEffect(() => {
    const getChinpokomons = async () => {
      const q = query(collection(db, "chinpokomon"), where("type", "==", type));
      const docs = [];
      const querySnapshot = await getDocs(q);
      // console.log('DATA:', querySnapshot);
      querySnapshot.forEach((doc) => {
        // console.log('DATA:', doc.data(), 'ID:', doc.id);
        docs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(docs);
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