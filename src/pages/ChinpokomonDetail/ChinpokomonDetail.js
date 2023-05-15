import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// FIRBASE - FIRESTORE
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import CardChinpokomonComponent from "../../components/CardChinpokomonComponent/CardChinpokomonComponent";

import "./ChinpokomonDetail.css";

const ChinpokomonDetail = () => {
  const [chinpokomonData, setChinpokomonData] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const getChinpokomons = async () => {
      const q = query(collection(db, "chinpokomon"), where(documentId(), "==", id));
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
  }, [id]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Ficha Técnica</h1>
      {chinpokomonData.map((data) => {
        return <CardChinpokomonComponent chinpokomonsData={data} key={data.id} />;
      })}
    </div>
  );
};

export default ChinpokomonDetail;