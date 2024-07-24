"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LatestUpdate = () => {
  const filteredData = [
    {
      id: 2,
      created_on: "2020-12-15T05:19:39+00:00",
      eventdate: "2020-12-23",
      title: "Books will be available on the specific date."
    },
    {
      id: 3,
      created_on: "2020-12-15T08:52:50+00:00",
      eventdate: "2020-12-21",
      title: "Result has been declared"
    },
    {
      id: 4,
      created_on: "2020-12-15T09:29:56+00:00",
      eventdate: "2020-12-14",
      title: "Annual function data has been declared"
    },
    {
      id: 5,
      created_on: "2021-07-14T10:19:02+00:00",
      eventdate: "2021-07-15",
      title: "Tomorrow is holiday"
    }
  ];

  console.log(filteredData);

  const handleSearch = (event) => {
    let value = event?.target?.value?.toUpperCase();
    let result = [];
    let num1 = 100;
    result = allData?.filter((data) => {
      if (isNaN(+value)) {
        return data?.full_name?.toUpperCase().search(value) !== -1;
      } else if (!isNaN(+value)) {
        return data?.admission_number?.search(value) !== -1;
      }
    });
    setFilteredData(result);
  };
  return (
    <div className="page-container " >
      <div className=" row mx-1 md:mx-3 mb-5" >
        <div >
          <h3 className="ms-4 uppercase font-bold text-start">Latest Update</h3>
          <table style={{ width: "100%" }} className=" table-bordered">
            <tr className="">
              <th className="r3 w-[20%] border border-b-2 border-black">DATE</th>
              <th className="r2 w-[33%] border border-b-2 border-black"> HEADING</th>
              {/* <   th className="r3">Admission No</th> */}
              <th className="r3 w-[33%] border border-b-2 border-black">INFO</th>
            </tr>
            {filteredData.length !== 0 ? (
              <>
                {filteredData?.map((ei, i) => (
                  // console.log(ei)
                  <tr key={i}>
                    <td className="text-sm  md:text-xl items-center border border-b-2 border-black">{ei?.eventdate}</td>
                    <td className="text-sm  md:text-xl items-center border border-b-2 border-black">{ei?.title}</td>
                    {/* <td>{ei.admission_n md:text-xl items-center umber}</td> */}
                    <td className="text-sm  md:text-xl items-center border border-b-2 border-black">{ei?.title}</td>
                  </tr>
                ))}
              </>
            ) : (
              <td colSpan="4">
                <div  style={{ textAlign: " center" }}>
                  <p>No Data Found!!</p>
                </div>
              </td>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
export default LatestUpdate;
