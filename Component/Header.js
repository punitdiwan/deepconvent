// import {
//   Button,
//   Navbar,
//   Container,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem
// } from "react-bootstrap";
// import Link from "next/link";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import CallIcon from "@material-ui/icons/Call";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import axios from "axios";
// import useSWR from "swr";

// const Header = () => {
//   // const fetcher = async (url) => {
//   //   const response = await axios.get(url);
//   //   return response.data;
//   // };

//   // const API_ENDPOINT =
//   //   "https://cms.maitretech.com/newwisdom/items/config?fields=*.*.*";
//   // const { data, error } = useSWR(API_ENDPOINT, fetcher);
//   // if (error) {
//   //   return <div>Error loading data</div>;
//   // }

//   // if (!data) {
//   //   return <div>Loading...</div>;
//   // }

//   // const useData = data.data;
//   // console.log("checked", useData);
//   // Extract the image data from the API response

//   return (
//     // <>
//     //
//     <>
//       <div className="container-fluid">
//         <div
//           className="row display_none"
//           style={{
//             backgroundColor: "#93B3CE",
//             color: "white",
//             height: "50px"
//           }}
//         >
//           {/* <div className="col-lg-1"> </div> */}
//           <div className="pt-4 pb-1 col-lg-11" style={{ fontSize: "13.4px" }}>
//             Give us a call! <CallIcon /> 9826954459 |
//             Deepshikshasamiti@gmail.com
//           </div>
//         </div>
//       </div>
//       <div className="container-fluid sticky-top ">
//         <div className=" pt-3 pb-4 row bg-light  ">
//           <div className="col-lg-4 col-9 d-flex justify-content-center">
//             <Link href="/#">
//               <img
//                 className="mt-3"
//                 src="/d.png"
//                 style={{ width: "110px", height: "100px" }}
//               />
//             </Link>

//             <h4 className=" fs-2 ms-5 logo_name" style={{ marginTop: "30px" }}>
//               <p> Deep Convent School</p>
//               <p className="text-center display_none fs-3">
//                 Believe in the best
//               </p>
//             </h4>
//           </div>

//           <div className="col-lg-8 padd_left_rspnv ">
//             <Navbar
//               collapseOnSelect
//               expand="md"
//               className="p-0 mt-1 mb-0 nav_bg_clr1"
//               variant="dark"
//             >
//               <Container>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                   <Nav className="me-auto flot_right_menu">
//                     <div className="  d-flex justify-content-center disply_class"></div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="/">HOME</Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <a href="#">
//                             ABOUT&nbsp;US{" "}
//                             <ExpandMoreIcon className="arrow_icon" />
//                           </a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li>
//                                 <Link href="About">About School</Link>
//                               </li>
//                               <li>
//                                 <Link href="Director">Director Desk</Link>
//                               </li>
//                               <li>
//                                 <Link href="Principal">Principal Desk</Link>
//                               </li>
//                               <li>
//                                 <Link href="OurAim ">Our Aim</Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             ACADEMICS <ExpandMoreIcon className="arrow_icon" />
//                           </Link>
//                           {/* <a href="#">ACADEMICS +</a> */}
//                           <div className="margin_menu">
//                             <ul>
//                               <li>
//                                 <Link href="AdmissionProcedure">
//                                   Admission Procedure
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link href="UniformDetails">
//                                   Uniform Details
//                                 </Link>
//                               </li>
//                               <li>
//                                 <Link href="LatestUpdate">Latest Update</Link>
//                               </li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="Gallery">GALLERY</Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="Facilities">FACILITIES</Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="Contact">CONTACT</Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <b
//                               style={{
//                                 backgroundColor: "red",
//                                 color: "white",
//                                 borderRadius: "6px",
//                                 fontWeight: "600",
//                                 padding: ""
//                               }}
//                               className="px-2 py-2"
//                             >
//                               LOG&nbsp;IN
//                             </b>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </Nav>
//                   <Nav></Nav>
//                 </Navbar.Collapse>
//               </Container>
//             </Navbar>
//           </div>
//         </div>
//       </div>
//     </>
//     //       );
//     //     // {/* })} */}
//     //   </div>
//     // </>
//   );
// };

// export default Header;

import {
  Button,
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import Link from "next/link";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import useSWR from "swr";

const Header = () => {
  return (
    <>
      <div className="container-fluid">
        <div
          className="row display_none"
          style={{
            backgroundColor: "#93B3CE",
            color: "white",
            height: "50px"
          }}
        >
          <div className="pt-4 pb-1 col-lg-11" style={{ fontSize: "13.4px" }}>
            Give us a call! <CallIcon /> 9826954459 | Deepshikshasamiti@gmail.com
          </div>
        </div>
      </div>
      <div className="container-fluid sticky-top">
        <div className="pt-3 pb-4 row bg-light">
          <div className="col-lg-4 col-9 d-flex justify-content-center">
            <Link href="/#">
              <img
                className="mt-3"
                src="/d.png"
                style={{ width: "110px", height: "100px" }}
              />
            </Link>

            <h4 className="fs-2 ms-5 logo_name" style={{ marginTop: "30px" }}>
              <p> Deep Convent School</p>
              <p className="text-center display_none fs-3">
                Believe in the best
              </p>
            </h4>
          </div>

          <div className="col-lg-8 padd_left_rspnv">
            <Navbar
              collapseOnSelect
              expand="md"
              className="p-0 mt-1 mb-0 nav_bg_clr1"
              variant="dark"
            >
              <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto flot_right_menu">
                    <div className="d-flex justify-content-center disply_class"></div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="/">HOME</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <a href="#">
                            ABOUT&nbsp;US{" "}
                            <ExpandMoreIcon className="arrow_icon" />
                          </a>
                          <div className="margin_menu">
                            <ul>
                              <li>
                                <Link href="About">About School</Link>
                              </li>
                              <li>
                                <Link href="Director">Director Desk</Link>
                              </li>
                              <li>
                                <Link href="Principal">Principal Desk</Link>
                              </li>
                              <li>
                                <Link href="OurAim">Our Aim</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="#">
                            ACADEMICS <ExpandMoreIcon className="arrow_icon" />
                          </Link>
                          <div className="margin_menu">
                            <ul>
                              <li>
                                <Link href="AdmissionProcedure">
                                  Admission Procedure
                                </Link>
                              </li>
                              <li>
                                <Link href="UniformDetails">
                                  Uniform Details
                                </Link>
                              </li>
                              <li>
                                <Link href="LatestUpdate">Latest Update</Link>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="Gallery">GALLERY</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="Facilities">FACILITIES</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="Contact">CONTACT</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="s21">
                      <ul className="dropdown111">
                        <li>
                          <Link href="#">
                            <b
                              style={{
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "6px",
                                fontWeight: "600",
                                padding: ""
                              }}
                              className="px-2 py-2"
                            >
                              LOG&nbsp;IN
                            </b>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </Nav>
                  <Nav></Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
