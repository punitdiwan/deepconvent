"use client"
import React, { useEffect, useState } from "react";
// import useSWR from "swr";/
// import Layout from "../Component/Layout";
import axios from "axios";

const About = () => {
 
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://cms.maitretech.com/deepconvent/items/about_school?fields=*.*"
      );
      
      // const data = res.data.data[0];
      setData(res.data.data[0]);
    } catch (error) {
      console.log("errors++++",error);
    }
  };
  console.log(data)

  return (
      <div className="container-fluid">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between mx-auto items-center ">
            <div className="col-sm-6 mb-3 mt-5">
              <div style={{ width: "96%" }}>
                <img src={data?.image?.data.full_url} alt="no_img" style={{ width: "100%",height:"350px" }} />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <h1>About Us </h1>
              <p style={{fontSize:15}}>
                {data.about_school}
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default About;
