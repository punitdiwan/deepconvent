import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Layout from "../Component/Layout";
import axios from "axios";
// import React, { useState } from "react";

function Director() {
  //    const fetcher = async (url) =>{
  //     const response = await axios.get(url);
  //     return response.data;
  //    }

  //    const API_ENDPOINT ="https://cms.maitretech.com/deepconvent/items/director_message?fields=*.*";
  //    const { data, error} = useSWR(API_ENDPOINT, fetcher);

  //    if (error) {
  //     return <div>Error loading data</div>;
  //   }

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  //   const directorName = data.data[0].director_name;
  //   const directorMessage = data.data[0].director_message;
  //   const fullUrl = data.data[0].director_image.data.full_url;

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
    <Layout>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div
              className=" col-lg-5 col-md-4 col-sm-6 col-xs-12 drt_img mt-5  mb-4 "
              style={{ textAlign: "center" }}
            >
              <img
                src={data.director_image?.data.full_url}
                alt="Director"
                style={{ width: "100%", height: "400px" }}
              />
            </div>
            <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12 mb-4">
              <h1>Director Message</h1>
              <p className="ps-4" style={{ color: "#777", lineHeight: "1.7" }}>
                {data.director_message}
              </p>
              <p className="ps-4 pt-4">
                <b> Thank you.</b>{" "}
              </p>
              <p className="ps-4">
                {" "}
                <b> Name : {data.director_name} </b>{" "}
              </p>
              <p className="ps-4">
                {" "}
                <b> Director, Deep Convent School </b>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Director;
