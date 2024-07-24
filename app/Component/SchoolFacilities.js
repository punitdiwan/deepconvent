import Link from "next/link";
import { IoSunny } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
const SchoolFacilities = () => {
  return (
    <div className="p-0 m-0 container-fluid anim_down">
      <div className="p-0 m-0 row">
        <div className="pt-5 mt-5 col-lg-12"></div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8 d-flex justify-content-center">
            <span style={{ display: "flex" }}>
              <h1 className="text-3xl md:text-4xl">
                Deep Convent is a Place Your Child Learns To
              </h1>
            </span>
          </div>
          <div className="col-sm-4 d-flex justify-content-center">
            <div className="bg_color_timer">
              <h1 class="rw-words rw-words-1 ">
                <span>Enjoy School</span>
                <span>Succeed</span>
                {/* <span>Respect Others</span> */}
                {/* <span>Build Self-Esteem</span> */}
                <span>Value Learning</span>
                <span>Succeed</span>
              </h1>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <h3 style={{ color: "#777", textAlign: "center" }}>
              Educating children is our mission and YOU the parents are our
              customers. Our programs are designed to offer parents flexibility
              while maximizing the benefits to our students.
            </h3>
          </div>
        </div>
      </div>

      <div className="container pt-5 mt-5">
        <div className="flex flex-row justify-between w-[80%] mx-auto">
          <div className="col-lg-3 col-md-4 col-sm-6 col-6">
            <IoSunny
              style={{
                color: "#c6c9cc",
                height: "50px",
                width: "50px"
              }}
            />
          </div>
          <div className="col-lg-8 col-md-4 col-sm-6 col-6 d-flex justify-content-center">
            <CiCloudOn
              className="cloud_up"
              style={{
                color: "#c6c9cc",
                height: "50px",
                width: "50px"
              }}
            />
            <CiCloudOn
              className="pt-2 cloud_up "
              style={{
                color: "#c6c9cc",
                height: "90px",
                width: "90px",
                marginLeft: "-10px",
                
              }}
            />
          </div>
        </div>
      </div>
      {/* <div className="dash_bordre"> -</div> */}
      <div className=" container-fluid xlas0">
        <div className="container ">
          <div className="flex flex-col lg:flex-row ">
            <div className=" flex flex-col mx-auto">
              <center>
                {/* <div style={{ width: "85%" }}> */}
                <div className="flex flex-col lg:flex-row lg:gap-5 mt-36 ">
                  <div className=" sm_img_1" style={{ textAlign: "center" }}>
                    <center>
                      <div className=" sm_img_1 xlas1 ">
                        <img
                          src="/1.png"
                          alt="Avatar"
                          className="w-36 h-36"
                        />
                      </div>
                      <div className="dash_bordre1"></div>
                    </center>
                    <h3>Our Philosophy</h3>
                  </div>
                  <div className=" sm_img_2" style={{ textAlign: "center" }}>
                    <center>
                      <div className=" sm_img_2 xlas1 ">
                        <img
                          src="/22.jpeg"
                          alt="Avatar"
                          className="w-36 h-36 "
                        />
                      </div>
                      <div className="dash_bordre1"></div>
                    </center>
                    <h3>What We offer</h3>
                  </div>
                  <div className=" sm_img_3 " style={{ textAlign: "center" }}>
                    <center>
                      <div className="xlas1 sm_img_3  ">
                        <img src="/3.png" alt="Avatar" className="w-36 h-36" />
                      </div>
                      <div className="dash_bordre1"></div>
                    </center>

                    <h3 className="">Schedule A Tour</h3>
                  </div>
                </div>
              </center>
            </div>
            <div className=" center_img_flip">
              <center>
                <div className="cards">
                  <div className="flip-card xlas11">
                    <div className="flip-card-inner  ">
                      <div className="flip-card-front ">
                        <img
                          src="/p.jpeg"
                          alt="Avatar"
                          className="flip_img"
                          style={{ width: "300px", height: "300px" }}
                        />
                      </div>
                      <div className="flip-card-back">
                        <img
                          src="/a.jpeg"
                          alt="Avatar"
                          className="flip_img"
                          style={{ width: "300px", height: "300px" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="dash_bordre"></div>
                </div>
                <div className="row">
                  <div className="mt-5 justify-content-center">
                    <h2
                      style={{ color: "#93B3CE", textAlign: "center" }}
                      className="font_c"
                    >
                      Who we Are
                    </h2>
                  </div>
                </div>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SchoolFacilities;
