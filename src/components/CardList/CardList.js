import React, { useState, useEffect } from "react";

import CardChinpokomonComponent from "../CardChinpokomonComponent/CardChinpokomonComponent";
import { Link } from "react-router-dom";

import "./CardList.css";
import Spinner from "../Spinner/Spinner";

import { collection, query, getDocs, } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const CardList = () => {
  const [chinpokomonsData, setChinpokomonsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getChinpokomons = async () => {
      const q = query(collection(db, "chinpokomon"));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setChinpokomonsData(docs);
    };
    getChinpokomons();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div className="CardListContainer">
          {chinpokomonsData.map((data) => {
            return (
              <Link
                to={`details/${data.id}`}
                style={{ textDecoration: "none" }}
                key={data.id}
              >
                <CardChinpokomonComponent chinpokomonsData={data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default CardList;