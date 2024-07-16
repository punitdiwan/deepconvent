import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import Link from "next/link";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";
import useSWR from "swr";
const Footer = () => {
  const fetcher = async (url) => {
    const response = await axios.get(url);

    return response.data;
  };

  const API_ENDPOINT =
    " https://cms.maitretech.com/newwisdom/items/gallery?fields=*.*.*";
  const { data, error } = useSWR(API_ENDPOINT, fetcher);
  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const useData = data.data;
  const phoneNumber = useData[0]?.phone;

  return (
    <>
      <div className="pb-5 container-fluid bg_footer_">
        <div className="container">
          <div className="row">
            <div className="mt-5 col-lg-3 AS_footer_head">
              <div style={{ width: "95%" }}>
                <div className="asdfs"></div>
                <div style={{ marginTop: "-18px" }} className="pb-5 mb-5">
                  <Link href="#">
                    <a>
                      <button
                        className="px-4 py-3 btn_btm"
                        style={{
                          fontSize: "19px",
                          border: "none",
                          backgroundColor: "#93B3CE",
                          color: "#fff",
                        }}
                      >
                        Get in Touch
                      </button>
                    </a>
                  </Link>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117280.64430723892!2d77.38278960329419!3d23.278718088838186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69f4857e02ad%3A0x4283e701f28bb1eb!2sDeep%20Convent%20School!5e0!3m2!1sen!2sin!4v1707831181960!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ width: "100%", height: "260px" }}
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>

             
              </div>
            </div>
            <div className="pt-5 mt-5 col-lg-3 AS_footer_head">
              <h3>School Timing</h3>

              <div className="row">
                <div className="mt-2 col-lg-12 QL_footer_ul">
                  <ul>
                    <li>
                      <b> SCHOOL HOURS</b>
                    </li>
                    <li>09.00 a.m. to 02.30 p.m. for Classes VI to XII</li>
                    <li>09.00 a.m. to 02.30 p.m. for Classes Nursery to V</li>
                    <li>
                      <b> OFFICE HOURS</b>
                    </li>
                    <li>09.00 a.m. to 02.30 p.m.</li>
                    {/* <li>
                      <b> TEACHERS WILL BE AVAILABLE ON</b>
                    </li>
                    <li>11.30 a.m. & 12.45 p.m.</li>
                    <li>( On the Saturday of every week )</li> */}
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-5 mt-5 col-lg-4 bg_footer_right">
              <h3>Contact Us</h3>
              <span className=" QL_footer_ul1">
                {" "}
                <span className="d-flex">
                  {" "}
                  <LocationOnIcon className="mt-3 sma1" />
                  <p className="mt-3">
                    <b> WE ARE SITUATED AT :</b>
                  </p>
                </span>
                <p>
                 Ayodhya Bypass, Ayodhya Nagar, Bhopal, Madhya Pradesh 462041
                </p>
                <p>
                  <b>Contact: </b>{" "}
                  <span className="text-light">
                    {" "}
                    9826954459 | Deepshikshasamiti@gmail.com{" "}
                  </span>
                </p>
              </span>
              <span className="d-flex QL_footer_ul1">
                <CallIcon className="mt-1 sma1" />
                <p>
                  <b> GENERAL INQUIRIESS :</b>
                  <span className="text-light"> 9826954459</span>
                </p>
              </span>
              <span className="d-flex QL_footer_ul1">
                {" "}
                <MailIcon className="mt-1 sma1" />
                <p>
                  <b> GENERAL EMAIL :</b>
                  <span className="text-light"> Deepshikshasamiti@gmail.com</span>
                </p>
              </span>
            </div>
            <div className="pt-5 mt-5 col-lg-2 bg_footer_right">
              <h3 style={{ textAlign: "center" }}>Social Profiles</h3>
              <span className="pt-5 d-flex justify-content-center">
                <Link href="/">
                  <a
                    className="me-3 fb_clr"
                    style={{
                      border: " ",
                      backgroundColor: "white",
                      borderRadius: "30px",
                    }}
                  >
                    <FacebookIcon
                      style={{ fontSize: "29px", color: "gray" }}
                      className="fb_clr"
                    />{" "}
                  </a>
                </Link>
                <Link href="/">
                  <a
                    className="me-3 insta_clr"
                    style={{
                      border: "  ",
                      backgroundColor: "white",
                      borderRadius: "30px",
                    }}
                  >
                    <InstagramIcon
                      style={{ fontSize: "29px", color: "gray" }}
                      className="insta_clr"
                    />{" "}
                  </a>
                </Link>
                {/* <Link href="#">
                  <a
                    className="ytb_clr"
                    style={{
                      border: "  ",
                      backgroundColor: "white",
                      borderRadius: "30px",
                    }}
                  >
                    <YouTubeIcon
                      style={{ fontSize: "29px", color: "gray" }}
                      className="ytb_clr"
                    />
                  </a>
                </Link> */}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="row p-0 m-0 bg-dark pt-3 pb-1">
        <div class="col-md-8 text-center">
          <p style={{ color: "#555" }}>
            © Copyright{" "}
            <a href="#" className="text-light">
              Deep Convent School
            </a>{" "}
            All Rights Reserved.
          </p>
        </div>
        <div class="col-md-4 text-center">
          <p style={{ color: "#555" }}>
            Created with ❤️{" "}
            <a href="#" style={{ color: "#ccc" }}>
              Maitretech Solution
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Footer;
