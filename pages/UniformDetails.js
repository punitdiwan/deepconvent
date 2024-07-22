// import { SRLWrapper } from "simple-react-lightbox";
import Layout from "../Component/Layout";
import useSWR from "swr";
import { useState, useEffect } from "react";

const AdmissionProcess = () => {
  // const API = "https://cms.maitretech.com/deepconvent/items/uniformdetails?fields=*.*";

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cms.maitretech.com/deepconvent/items/uniformdetails?fields=*.*"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok ");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData, "jsondata aksdjh");
      } catch (error) {
        console.log("Fetch error: ", error);
      }
    };
    fetchData();
  }, []);


 console.log("data",typeof data,data)
  let slides = data?.data?.map((item) => item.uniform.data.full_url);

  console.log("slides", slides);

  return (
    <Layout>
        <div className="container-fluid">
          <div className="mb-3 row">
            {slides?.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6 col-sm-6 ">
                  <img src={item} className="mt-3 imght " alt="no_img" />
                </div>
              );
            })}
          </div>
        </div>
    </Layout>
  );
};
export default AdmissionProcess;
