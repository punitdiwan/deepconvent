"use client"
import React, { useState, useEffect } from "react";
// import useSWR from "swr";
// import Layout from "../Component/Layout";
import axios from "axios";
// import React, { useState } from "react";

function Director() {

  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://cms.maitretech.com/deepconvent/items/director_message?fields=*.*"
      );
      // const data = res.data.data[0];
      setData(res.data.data[0]);
    } catch (error) {
      console.log("errors++++", error);
    }
  };

  // console.log(res.data.data[0])
  return (
    
      <div className="container mb-5">
          <div className="flex flex-col mx-auto items-center gap-3 w-full md:flex-row ">
            <div
              className="w-[80%] md:w-[400px] "
              
            >
              <img
                src={data.director_image?.data.full_url}
                alt="Director"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="w-[80%] wa">
              <h1>Director Message</h1>
              <p style={{ color: "#777", lineHeight: "1.7" }}>
                {data.director_message}
              </p>
              <p className="">
                <b> Thank you.</b>{" "}
              </p>
              <p className="">
                <b> Name : {data.director_name} </b>{" "}
              </p>
              <p className="">
                <b> Director Deep Convent School </b>{" "}
              </p>
            </div>
          </div>
        </div>
  );
}

export default Director;
