import Link from "next/link";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import CloudQueueIcon from "@material-ui/icons/CloudQueue";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Slider } from "@material-ui/core";
import axios from "axios";
import useSWR from "swr";
const AboutSchool = () => {
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };
const API_ENDPOINT = "https://cms.maitretech.com/deepconvent/items/about_school?fields=*.*";

const {data, error} = useSWR(API_ENDPOINT,fetcher);
console.log("Data: ", data,"Error:",error);


if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const about = data.data;
  console.log(about)


  return (
    <div className="container-fluid anim_down">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="p-0 m-0 col-sm-4 d-flex justify-content-center effect_clas">
            <h2 style={{ fontSize: "2em" }}>If you're looking for</h2>
          </div>
          <div className="p-0 m-0 col-sm-4 effect_clas1">
            <div className="bg_color_timer1">
              <h2 class="rw-words rw-words-1 " style={{ textAlign: "center" }}>
                <span>a full day program</span>
                <span> 2, 3, 4 or 5 day options</span>
                <span>a structured environment</span>
                <span>a place your child will love</span>
              </h2>
            </div>
          </div>
          <div className="p-0 m-0 col-sm-4">
            <h2 style={{ fontSize: "2em" }}> Deep Convent School is for you. .</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <h4
              style={{
                fontSize: "21px",
                color: "#93B3CE",
                fontWeight: "200!important",
              }}
              className="lead tall"
            >
              Our committment is to be the best preschool possible. Contact us
              today to see if we are a fit for you and your child.
            </h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 bg_img_girl">
            {/* <img src="/images/child_top.png" alt="no_img" style={{ width: "100%" }} /> */}
          </div>
        </div>
      </div>
      <div className="container bg_girl_img">
        <div className="row">
          <div className="col-sm-6 ">
            <div style={{ width: "98%" }}>
              <h1 className="pb-5">
                What<strong> Parents</strong> are Saying
              </h1>
              {/* <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true} style={{ paddingTop: "-100px!important" }} >
                                {slides.map((slide, index) => {
                                    return <div class="carousel-inner" role="listbox">
                                        <div className='carousel' key={index} role="listbox">
                                            <div style={{ backgroundColor: "#0099e6", color: "white", borderRadius: "10px" }} >
                                                <span className="p-2">
                                                    <span style={{ fontSize: "70px", float: "left" }}>&ldquo;</span>
                                                    <p className="py-2"  >
                                                        {slide?.title}
                                                    </p>

                                                    <p><br /> <br /></p>
                                                    <span style={{ fontSize: "70px", float: "right", marginTop: "-30px" }}>&#8221;</span>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                })}
                            </Carousel> */}
              <div
                style={{
                  backgroundColor: "#0099e6",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span className="p-2">
                  <span style={{ fontSize: "70px" }}>&ldquo;</span>
                  <p
                    style={{
                      marginTop: "-90px",
                      padding: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    Yes, Our Child as Improved a lot. This year she improved a
                    lot and she also induced herself for self study.
                  </p>
                  <p
                    style={{
                      marginTop: "-20px",
                      padding: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    She also watches less T.V. and don’t go Outsides she just
                    sits and writes or reads the books.
                  </p>
                  <p
                    style={{
                      marginTop: "-20px",
                      padding: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    {" "}
                    And When I Asked her about this she said that my teacher
                    induced me for self studier rather than tutor or coaching
                    so, I am why happy to learn that teachers are responsible
                    towards our children’s.
                  </p>
                  <p>
                    <br /> <br />
                  </p>
                  <span
                    style={{
                      fontSize: "70px",
                      float: "right",
                      marginTop: "-30px",
                    }}
                  >
                    &#8221;
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ width: "98%" }}>
              <h1 className="pb-5">
                What <strong> Students </strong> are Saying
              </h1>
              <div
                style={{
                  backgroundColor: "#93B3CE  ",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span className="p-2">
                  <span style={{ fontSize: "70px" }}>&ldquo;</span>
                  <h4
                    style={{
                      marginTop: "-80px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    I'm embarrassed of my dad dancing. No one can see my dad
                    dancing.
                  </h4>
                  <span
                    style={{
                      fontSize: "70px",
                      float: "right",
                      marginTop: "-50px",
                    }}
                  >
                    &#8221;
                  </span>
                </span>
              </div>
              <div
                className="mt-4"
                style={{
                  backgroundColor: "#93B3CE",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span className="p-2">
                  <span style={{ fontSize: "70px" }}>&ldquo;</span>
                  <h4
                    style={{
                      marginTop: "-80px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    When I grow up I'm going to be a grown-up.
                  </h4>
                  <span
                    style={{
                      fontSize: "70px",
                      float: "right",
                      marginTop: "-50px",
                    }}
                  >
                    &#8221;
                  </span>
                </span>
              </div>
              <div
                className="mt-4"
                style={{
                  backgroundColor: "#93B3CE",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span className="p-2">
                  <span style={{ fontSize: "70px" }}>&ldquo;</span>
                  <h4
                    style={{
                      marginTop: "-80px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    I feel like my favorite food is not playdough anymore.{" "}
                  </h4>
                  <span
                    style={{
                      fontSize: "70px",
                      float: "right",
                      marginTop: "-50px",
                    }}
                  >
                    &#8221;
                  </span>
                </span>
              </div>
              <div
                className="mt-4"
                style={{
                  backgroundColor: "#93B3CE",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                <span className="p-2">
                  <span style={{ fontSize: "70px" }}>&ldquo;</span>
                  <h4
                    style={{
                      marginTop: "-80px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                      marginLeft: "20px",
                      fontSize: "16px",
                      fontFamily: "Georgia, serif",
                    }}
                  >
                    I changed my mind, I don't like Tuesdays and Fridays. I like
                    Winter.
                  </h4>
                  <span
                    style={{
                      fontSize: "70px",
                      float: "right",
                      marginTop: "-50px",
                    }}
                  >
                    &#8221;
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutSchool;
