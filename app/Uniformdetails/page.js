"use client"
import { useState, useEffect } from "react";

const AdmissionProcess = () => {

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
        <div className="container-fluid mb-10">
          <div className=" flex gap-4 flex-wrap justify-center">
            {slides?.map((item, i) => {
              return (
                <div key={i} className="">
                  <img src={item} className="mt-3 w-[350px] h-[300px]" alt="no_img" />
                </div>
              );
            })}
          </div>
        </div>
  );
};
export default AdmissionProcess;
