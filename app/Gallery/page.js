// import Layout from "../Component/Layout";
"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cms.maitretech.com/deepconvent/items/gallery?fields=*.*"
        );
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
        <div className="container-fluid my-6">
          <div className=" flex flex-wrap  gap-3 justify-center">
            {data.map((item) => (
              <div key={item.id} className=" ">
                <img
                  src={item?.photo?.data?.full_url}
                  className="mt-3 imght w-[350px] h-[300px]"
                  alt={`Image ${item.id}`}
                />
              </div>
            ))}
          </div>
        </div>
  );
};

export default Gallery;


