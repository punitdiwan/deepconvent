
import React from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'
import axios from 'axios';

const About = () => {

const  fetcher = async (url) =>{
    const response = await axios.get(url);
    return response.data;
};

const API_ENDPOINT ="https://cms.maitretech.com/deepconvent/items/about_school?fields=*.*";
const {data, error } = useSWR(API_ENDPOINT,fetcher);

if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const about = data.data[0].about_school;
  const fullUrl = data.data[0].image.data.full_url;
  console.log(about,"datasdfsdfsdf")


    return (
        <Layout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row ">
                        <div className="col-sm-6 mb-3 mt-5">
                            <div style={{ width: "96%" }}>
                                <img src={fullUrl} alt="no_img" style={{ width: "100%",height:"350px" }} />
                            </div>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <h1>About Us </h1>
                            <p>{about}</p>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )

}
export default About

