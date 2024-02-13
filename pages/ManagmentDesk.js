import React, { useState, useEffect } from 'react'
import useSWR from 'swr';
import Layout from '../Component/Layout'
// import React, { useState } from "react";

const fetcher = (...args) => fetch(...args).then(res => res.json());
function Chairman() {

    const [isReadMore, setIsReadMore] = useState(true);

    const url = "https://cms.schoolscoop.co.in/renaissance/items/faculty?status=published&fields=*.*"
    const { data, error } = useSWR(url, fetcher);
    if (error) {
        return <div>Error...</div>
    }
    if (!data) {
        return <div>No data...</div>
    }

    const toggleReadMore = () => {
        if (isReadMore === true) {

        }
        setIsReadMore(!isReadMore);
    };



    // {isReadMore ? text.slice(0, 150) : text}
    //   <span onClick={toggleReadMore} className="read-or-hide">
    //     {isReadMore ? "...read more" : " show less"}
    //   </span>
    return (
        <Layout>
            <div className="container-fluid">
                {/* <div className="mb-5 row head_line">
                    <div className="col-lg-12">
                        <h4 className="pt-2"> WORD FROM CHAIRMAN :
                            {data?.data[1]?.description} 
                        </h4>

                    </div>
                </div> */}
                <div className='container'>
                    <div className="row">
                        <div className=" col-lg-5 mt-5 col-md-4 col-sm-6 col-xs-12 drt_img mb-4"
                            style={{ textAlign: "center" }}>
                            <img
                                //  src={data?.data[1]?.photo?.data?.full_url}
                                src="/images/demo1.jpg"
                                alt='Director'
                                style={{ width: "100%",height:"400px" }} />
                            {/* <h2>{data?.data[1]?.full_name} </h2> */}
                            {/* <h2> Demo Name </h2> */}
                        </div>
                        <div className=" col-lg-6 col-md-7 col-sm-6 col-xs-12 mb-4">
                            <h1>Our Managment</h1>
                            <p className="ps-4" style={{color:"#777",lineHeight: "1.7"}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae libero risus. Donec interdum sapien 
                                id hendrerit sodales. Sed mollis, quam vel laoreet aliquam, nisi est sodales ex, sit amet convallis diam
                                 orci sit amet urna. Maecenas ac quam malesuada, sagittis leo id, dignissim urna. Aliquam dapibus mi a
                                 c ex tempor aliquam. Praesent facilisis, sapien non pretium sagittis, leo leo tincidunt metus, at bibendum 
                                 nisl orci quis orci. Nullam vel tortor eu libero sagittis vestibulum eu at augue. Suspendisse commodo, nisl 
                                  nec blandit rutrum, purus neque tempus sapien, pulvinar pharetra ipsum arcu in justo. Nullam fringilla sem 
                                  arcu, vitae tempor urna auctor et. Proin euismod et leo convallis interdum.  
                            </p>
                            <p className="ps-4 pt-4"><b> Thank you.</b> </p>
                            <p className="ps-4">  <b>  Name </b> </p>
                            <p className="ps-4"> <b> New Maitretech Public School </b> </p>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Chairman
