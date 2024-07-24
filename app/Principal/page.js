"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

function Principal() {
  
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://cms.maitretech.com/deepconvent/items/principle_message?fields=*.*"
      );
      setData(res.data.data[0]);
    } catch (error) {
      console.log("errors++++",error);
    }
  };

  return (
      <div className="container-fluid">
        <div className="container">
          <div className="flex flex-col md:flex-row">
            <div
              className=" col-lg-5 col-md-4 col-sm-6 col-xs-12 drt_img mt-5  mb-4 "
              style={{ textAlign: "center" }}
            >
              <img
                src={data.principle_image?.data.full_url}
                alt="Director"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12 mb-4 flex flex-col items-center">
              <h1>Principal Message</h1>
              <p className="ps-4" style={{ color: "#777", lineHeight: "1.7" }}>
                {data.principle_message}
                
              </p>
              <p className="ps-4 pt-4">
                <b> Thank you.</b>{" "}
              </p>
              <p className="ps-4">
                {" "}
                <b> Name : {data.principle_name}</b>{" "}
              </p>
              <p className="ps-4">
                {" "}
                <b> Principal, Deep Convent School </b>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Principal;
