import React, { useEffect, useState } from "react";
import "./trendyol.css";
import axios from "axios";
import Card from "../card";

const Trendyol = () => {
  const [trend, setTrend] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const trendUrl = "http://localhost:3000/trendyolss";
  const datas = async () => {
    const res = await axios.get(`${trendUrl}`);
    setTrend(res.data);
    setIsloading(false);
  };
  useEffect(() => {
    datas();
  }, []);
  return (
    <>
        <div className="trendyol">

      {isloading ? (
        <img className="load"  src="https://lottiefiles.com/animations/dizzy-7SjbCFaGSt" />
      ) : (
        trend.map((item) => (
          <Card {...item}/>
        ))
      )}
      </div>

    </>
  );
};

export default Trendyol;
