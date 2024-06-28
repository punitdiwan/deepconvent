import React from 'react'
import Layout from '../Component/Layout'
import axios from 'axios'
import useSWR from 'swr';

const Contact = () => {

    const fetcher = async (url) =>{

        const response = await axios.get(url);
        return response.data;
    };

    const API_ENDPOINT = "https://cms.maitretech.com/newwisdom/items/config?fields=*.*.*";
    const {data , error} = useSWR(API_ENDPOINT,fetcher);
    
    if (error) {
        return <div>Error loading data</div>;
      }
    
      if (!data) {
        return <div>Loading...</div>;
      }

      const contact = data.data;
      console.log("cheaking",contact);

    return (
        <Layout>
            <div className="container ">
                <div className="row">
                    <div className="col-lg-5 col-md-4 col-sm-6 drt_img mb-3 mt-5"
                        style={{ textAlign: "center" }}>
                        <img
                            src="/deeplogo.jpeg"
                            alt='Director'
                            style={{ width: "100%",height:"75%" }} />

                    </div>
                    <div className="col-lg-1"></div>
                    <div className="mb-5 col-lg-6 col-md-6 col-sm-6 mb-3">
                        <div style={{ width: "100%" }}>
                            <h1>Contact Us</h1>
                            <h3 style={{ color: "#93b3ce", margintop: "10px" }}>Get in <b> touch</b></h3>
                            <p style={{ marginTop: "10px" }}>We're happy to help you with any questions you may have. Feel free to schedule a tour,
                                call us or fill out the contact form and we will get right back in touch with you
                            </p>
                            <h3 style={{ color: "#93b3ce", margintop: "10px" }}>Our  <b> Locations</b></h3>
                            <p><b> Bhopal Location </b></p>
                            <div className="p-3">
                                <p>Ayodhya Bypass, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041</p>
                                <p>Pradesh. Pin Code: 462041</p>
                                <p>Contact: 9826954459</p>
                                <p>Contact: 9826954459 | Deepshikshasamiti@gmail.com</p>
                            </div>
                            <p> General Inquiries: 9826954459</p>
                            <p> General Email:Deepshikshasamiti@gmail.com</p>
                            <h2 style={{ color: "#93b3ce", margintop: "10px", marginBottom:"10px" }}>
                                School   <b> Hours</b></h2>
                            <h5>Monday - saturday 9.00 a.m. to 02.30 p.m. for Classes VI to XII</h5>
                            <h5>
                                Monday - saturday 9.00 a.m. to 02.30 p.m. for Nursery to V</h5>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )
}

export default Contact
