import {
  Button,
  Navbar,
  Container,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from "react-bootstrap";
import Link from "next/link";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import CallIcon from "@material-ui/icons/Call";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import axios from "axios";
import useSWR from "swr";

const Header = () => {
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  const API_ENDPOINT =
    "https://cms.maitretech.com/newwisdom/items/config?fields=*.*.*";
  const { data, error } = useSWR(API_ENDPOINT, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Extract the image data from the API response
  const useData = data.data;
  console.log("checked", useData);

  return (
    <>
      <div>
        {useData.map((item, i) => {
          return (
            <>
              <div className="container-fluid">
                <div
                  className="row display_none"
                  style={{
                    backgroundColor: "#93B3CE",
                    color: "white",
                    height: "50px",
                  }}
                >
                  <div className="col-lg-1"> </div>
                  <div
                    className="pt-4 pb-1 col-lg-11"
                    style={{ fontSize: "13.4px" }}
                  >
                    Give us a call! <CallIcon /> 9826954459  |
                    Deepshikshasamiti@gmail.com 
                  </div>
                </div>
              </div>
              <div className="container-fluid sticky-top ">
                <div className=" pt-3 pb-4 row bg-light  ">
                <div className="col-lg-4 col-9 d-flex justify-content-center">
            <Link href="/#">
             
            <img className="mt-3" src="/logo.png" style={{ width: "110px", height: "80px" }} />
               </Link>
             
            <h4 className=" fs-2 ms-5 logo_name" style={{ marginTop: "30px" }}><b> Deep Convent School</b>
              <p className="text-center display_none fs-3">Believe in the best</p>
            </h4>
          </div>

                  <div className="col-lg-8 padd_left_rspnv ">
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
                            <div className="  d-flex justify-content-center disply_class">
                             
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="/">
                                    <a>HOME</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <a href="#">
                                    ABOUT&nbsp;US{" "}
                                    <ExpandMoreIcon className="arrow_icon" />
                                  </a>
                                  <div className="margin_menu">
                                    <ul>
                                      <li>
                                        <Link href="About">
                                          <a>About School</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="Director">
                                          <a>Director Desk</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="Principle">
                                          <a>Principle Desk</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="OurAim ">
                                          <a>Our Aim</a>
                                        </Link>
                                      </li>
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="#">
                                    <a>
                                      ACADEMICS{" "}
                                      <ExpandMoreIcon className="arrow_icon" />
                                    </a>
                                  </Link>
                                  {/* <a href="#">ACADEMICS +</a> */}
                                  <div className="margin_menu">
                                    <ul>
                                      <li>
                                        <Link href="AdmissionProcedure">
                                          <a> Admission Procedure</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="UniformDetails">
                                          <a>Uniform Details</a>
                                        </Link>
                                      </li>
                                      <li>
                                        <Link href="LatestUpdate">
                                          <a>Latest Update</a>
                                        </Link>
                                      </li>
                                      {/* <li><Link href="#"><a>Menu - 1</a></Link></li> */}
                                    </ul>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="Gallery">
                                    <a>GALLERY</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="Facilities">
                                    <a>FACILITIES</a>
                                  </Link>
                                  {/* <a href="Facilities"> FACILITIES </a> */}
                                  {/* <div className="margin_menu">
                          <ul>
                            <li><Link href="Facilities"><a>Facilities</a></Link></li>
                            <li><Link href="#"><a>Menu - 1</a></Link></li>
                              <li><Link href="#"><a>Menu - 1</a></Link></li>
                              <li className="margin_menu1"><Link href="#"><a>Menu - 1</a></Link></li>

                          </ul>
                        </div> */}
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="Contact">
                                    <a>CONTACT</a>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="s21">
                              <ul class="dropdown111">
                                <li>
                                  <Link href="#">
                                    <a>
                                      <b
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                          borderRadius: "6px",
                                          fontWeight: "600",
                                          padding: "",
                                        }}
                                        className="px-2 py-3"
                                      >
                                        LOG&nbsp;IN
                                      </b>{" "}
                                    </a>
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
        })}
      </div>
    </>
  );
};

export default Header;

// import { Button, Navbar, Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
// import Link from "next/link";
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import CallIcon from '@material-ui/icons/Call';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// const Header = () => {

//   const slides = [
//     { title: "https://images.unsplash.com/photo-1445280471656-618bf9abcfe0?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' },
//     { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' },
//     { title: "https://images.unsplash.com/photo-1419064642531-e575728395f2?crop=entropy&fit=crop&fm=jpg&h=400&ixjsv=2.1.0&ixlib=rb-0.3.5&q=80&w=1400", description: 'Lorem ipsum' }
//   ];

//   return (

//     <div className="container-fluid">
//       <div className="row bg_img" >
//         <div className="col-lg-1"></div>
//         <div className="p-0 m-0 col-lg-1 col-md-1 col-sm-4 logo_img">
//           <img src="/images/logo.png" />
//         </div>
//         <div className="p-0 col-lg-4 col-md-4 col-sm-8 school_name">
//           <span>
//             Him Academy Public School
//           </span>
//         </div>
//         <div className="p-0 col-lg-6 col-md-6 col-sm-12 left_header" >
//           <span className="left_header1" style={{ fontSize: "13px", color: "white" }}>Affiliated to CBSE , New Delhi &nbsp;
//             <span style={{ fontSize: "22px", textAlign: "center", marginTop: "3px	" }}> |</span> &nbsp;<MailOutlineIcon />  hapsvn@himacademy.com</span>
//           <div>
//             <span className="animated_color left_header2 ">Admission Open for 2021-22 | Talk to our Admission Counselor |<CallIcon /> 9459393200</span>
//           </div>
//         </div>
//       </div>
//       <div className="row nev_head" >
//         <div className="col-lg-12">
//           <Navbar collapseOnSelect expand="md" className="nav_bg_clr" variant="dark">
//             <Container>
//               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//               <Navbar.Collapse id="responsive-navbar-nav">
//                 <Nav className="me-auto">
//                   <div className="nav_btn">
//                     <li className="anchortg "><Link href="#">
//                       <a> HOME</a>
//                     </Link></li>
//                   </div>
//                   <div className="nav_drop nav_drop1">
//                     <li className="dropdown anchortg1" id="diva">
//                       ABOUT US +
//                       <li id="btn1" className="anchortg11"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" className="anchortg11" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" className="anchortg11" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>
//                   <div className="nav_drop nav_drop2">
//                     <li className="dropdown anchortg1" id="diva">
//                       ACADEMICS +
//                       <li id="btn1"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>

//                   <div className="nav_drop nav_drop3">
//                     <li className="dropdown anchortg1" id="diva">
//                       ADMISSION +
//                       <li id="btn1"><Link href="#">
//                         <a> About</a>
//                       </Link></li>
//                       <li id="btn2" ><Link href="#">
//                         <a> HOME2</a>
//                       </Link></li>
//                       <li id="btn3" ><Link href="#">
//                         <a> HOME3</a>
//                       </Link></li>
//                       <li id="btn4" ><Link href="#">
//                         <a> HOME4</a>
//                       </Link></li>
//                     </li>
//                   </div>
//                   <div className="nav_btn">
//                     <li className="anchortg"><Link href="#">
//                       <a> GALLERY</a>
//                     </Link></li>
//                   </div>
//                   <div className="nav_btn">
//                     <li className="anchortg"><Link href="#">
//                       <a> CONTACT</a>
//                     </Link></li>
//                   </div>

//                 </Nav>
//                 <Nav>
//                 </Nav>
//               </Navbar.Collapse>
//             </Container>
//           </Navbar>
//         </div>
//       </div>

//       {/* <div className="row">
//           <div className="col-lg-12">
//             <Navbar collapseOnSelect expand="md" className="nav_bg_clr" variant="dark">
//               <Container>
//                 <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//                 <Navbar.Collapse id="responsive-navbar-nav">
//                   <Nav className="me-auto">
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#">ABOUT US +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>

//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#"> ACADEMICS +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li className="margin_menu1"><Link href="#"><a>Menu - 1</a></Link></li>

//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li><a href="#">ADMISSION +</a>
//                           <div className="margin_menu">
//                             <ul>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                               <li><Link href="#"><a>Menu - 1</a></Link></li>
//                             </ul>
//                           </div>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="s21">
//                       <ul class="dropdown111">
//                         <li>
//                           <Link href="#">
//                             <a>HOME</a>
//                           </Link>
//                         </li>
//                       </ul>
//                     </div>
//                   </Nav>
//                   <Nav>
//                   </Nav>
//                 </Navbar.Collapse>
//               </Container>
//             </Navbar>
//           </div>
//         </div> */}
//       <div className="mb-5 row">
//         <div className="col-lg-12">
//           <div class="dropdown">
//             <button class="dropbtn">Dropdown</button>
//             <div class="dropdown-content">
//               <a href="#">Link 1</a>
//               <a href="#">Link 2</a>
//               <a href="#">Link 3</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="mt-5 row">
//         <div className="col-lg-12">
//           <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} style={{ paddingTop: "-100px!important" }} >
//             {slides.map((slide, index) => {
//               return <div class="carousel-inner" role="listbox">
//                 <div className='carousel items1' style={{ marginTop: "20px" }} key={index} role="listbox">
//                   <img
//                     src={slide.title}
//                     height={500} width={1500}
//                     alt="sorry_no_img"
//                   />
//                 </div>
//               </div>
//             })}
//           </Carousel>

//         </div>

//       </div>
//     </div>

//   )
// }

// export default Header
