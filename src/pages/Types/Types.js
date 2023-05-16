import React, { useState, useEffect, } from "react";
import { useParams } from "react-router-dom";


import { collection, query, getDocs, where, } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardChinpokomonComponent from "../../components/CardChinpokomonComponent/CardChinpokomonComponent";


const ChinpokomonType = () => {
  const [chinpokomonData, setChinpokomonData] = useState([]);

  let { type } = useParams();

  useEffect(() => {
    const getChinpokomons = async () => {

      let typeAux= type.slice(0,1).toUpperCase() + type.slice(1);
      const q = query(collection(db, "chinpokomon"), where("type", "==", typeAux));
      // console.log(q)
      const docs = [];
      const querySnapshot = await getDocs(q);

      console.log(querySnapshot)

      querySnapshot.forEach((doc) => {
        console.log(doc)

        docs.push({ ...doc.data(), id: doc.id });
      });

      setChinpokomonData(docs);
    };
    getChinpokomons();
  }, [type]);
  console.log("data: " + chinpokomonData)
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