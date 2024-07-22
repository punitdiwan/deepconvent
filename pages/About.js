import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Layout from "../Component/Layout";
import axios from "axios";

const About = () => {
  // const  fetcher = async (url) =>{
  //     const response = await axios.get(url);
  //     return response.data;
  // };

  // const API_ENDPOINT ="https://cms.maitretech.com/deepconvent/items/about_school?fields=*.*";
  // const {data, error } = useSWR(API_ENDPOINT,fetcher);

  // if (error) {
  //     return <div>Error loading data</div>;
  //   }

  //   if (!data) {
  //     return <div>Loading...</div>;
  //   }

  //   const about = data.data[0].about_school;
  //   const fullUrl = data.data[0].image.data.full_url;
  //   console.log(about,"datasdfsdfsdf")

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
      setData(res.data.data[0].image.data.full_url);
    } catch (error) {
      console.log("errors++++",error);
    }
  };
  // console.log(data)

  return (
    <Layout>
      <div className="container-fluid">
        <div className="container">
          <div className="row ">
            <div className="col-sm-6 mb-3 mt-5">
              <div style={{ width: "96%" }}>
                <img src={data} alt="no_img" style={{ width: "100%",height:"350px" }} />
              </div>
            </div>
            <div className="col-sm-6 mb-3">
              <h1>About Us </h1>
              <p style={{fontSize:15}}>
                Deep Convent School was established in 1995 and its been quite
                successful 29 years. Deep Convent School is promoted by Deep
                shikshasamiti it is a non- profit organization which mainly
                focus in helping the handicap and disable people to achieve
                education and other benefits. Deep Convent School is situated in
                H sector Ayodhya nagar, Ayodhya By Pass Road, Bhopal and it has
                classes from Nursery to 12th. In all those years Deep convent
                school has developed astonishing results in 10th and 12th. Since
                1995 we have produced some budding minds who will prove their
                mantle in the coming years. We try to keep our focus on studies
                and we believe that with proper guidance and positive thinking
                the student will easily achieve a respectable result in their
                exams.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default About;
