import Link from "next/link";
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import DevicesIcon from '@material-ui/icons/Devices';
import HomeIcon from '@material-ui/icons/Home';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import PoolIcon from '@material-ui/icons/Pool';

const SchoolFacilities = () => {
    return (
        <div className="p-0 m-0 container-fluid anim_down">
            {/* <div className="pt-4 pb-4 row bg-dark">
                <div className="col-lg-1"></div>
                <div className="text-white col-lg-8">
                    <h4 className="vst_cmp"> Visit Our Campus Today</h4>
                    <h4>
                        Are you ready to join us ! Inquire for availability.
                    </h4>
                </div>
                <div className="pt-3 col-lg-3 sdul_btn d-flex justify-content-center">
                    <Link href="Contact">
                        <a>
                            <button>
                                Schedule Tour!
                            </button>
                        </a>
                    </Link>
                </div>
            </div> */}

            <div className="p-0 m-0 row">
                <div className="pt-5 mt-5 col-lg-12"></div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-sm-8 d-flex justify-content-center">
                        <span style={{ display: "flex" }}>
                            <h1 style={{ fontSize: "2.6em" }}>Deep Convent is a Place Your Child Learns To</h1>
                        </span>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                        <div className="bg_color_timer">
                            <h1 class="rw-words rw-words-1 d-flex justify-content-center"  >
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
                        <h3 style={{ color: "#777", textAlign: "center" }}>Educating children is our mission and YOU the parents are our customers. Our programs are
                            designed to offer   parents flexibility while maximizing the benefits to our students.</h3>
                    </div>

                </div>
            </div>

            <div className="container pt-5 mt-5">
                <div className="row d-flex ">
                    <div className="col-lg-3 col-md-4 col-sm-6 col-6">
                        <WbSunnyIcon style={{
                            color: "#c6c9cc",
                            height: "50px", width: "50px",

                        }} /></div>
                    <div className="col-lg-8 col-md-4 col-sm-6 col-6 d-flex justify-content-center">
                        <CloudQueueIcon className="cloud_up" style={{
                            color: "#c6c9cc",
                            height: "50px", width: "50px"
                        }} />
                        <CloudQueueIcon className="pt-2 cloud_up" style={{
                            color: "#c6c9cc",
                            height: "90px", width: "90px", marginLeft: "-10px"
                        }} />
                    </div>
                </div>
            </div>
            {/* <div className="dash_bordre"> -</div> */}
            <div className=" container-fluid xlas0">
                <div className="container ">
                    <div className="row ">
                        <div className=" col-md-7 col-sm-12"  >
                            <center>
                                <div style={{ width: "85%" }} >
                                    <div className="pt-5 mt-5 row">
                                        <div className="col-md-4 col-sm-12 sm_img_1" style={{ textAlign: "center" }}>
                                            <center>
                                                <div className="xlas sm_img_1"> 
                                                    <img src="/1.png" alt="Avatar" style={{ width: '150px', height: '150px' }} />
                                                </div>
                                                <div className="dash_bordre1"></div>
                                            </center>
                                            <h3>Our Philosophy</h3>
                                        </div>
                                        <div className=" col-md-4 col-sm-12 sm_img_2" style={{ textAlign: "center" }}>
                                            <center>
                                                <div className="xlas sm_img_2">
                                                    <img src="/22.jpeg" alt="Avatar" style={{ width: '150px', height: '150px' }} />
                                                </div>
                                                <div className="dash_bordre1"></div>
                                            </center>
                                            <h3>What We offer</h3>
                                        </div>
                                        <div className="pb-5 mb-5 col-md-4 col-sm-12 sm_img_3" style={{ textAlign: "center" }}>
                                            <center>
                                                <div className="xlas sm_img_3 ">
                                                    <img src="/3.png" alt="Avatar" style={{ width: '150px', height: '150px' }} />
                                                </div>
                                                <div className="dash_bordre1"></div>
                                            </center>
                                            
                                            <h3 className="">Schedule A Tour</h3>
                                        </div>
                                    </div>
                                </div>
                            </center>
                        </div>
                        <div className="col-md-5 col-sm-12 center_img_flip">
                            <center>
                                <div className="cards">
                                    <div className="flip-card xlas11">
                                        <div className="flip-card-inner xlas1 ">
                                            <div className="flip-card-front "   >
                                                <img src="/p.jpeg" alt="Avatar" className="flip_img" style={{ width: '330px', height: '330px' }} />
                                            </div>
                                            <div className="flip-card-back">
                                                <img src="/a.jpeg" alt="Avatar" className="flip_img" style={{ width: '330px', height: '330px' }} />
                                            </div>
                                        </div> 
                                    </div>
                                    <div className="dash_bordre"></div>
                                </div>
                                <div className="row">
                                    <div className="mt-5 justify-content-center">
                                        <h2 style={{ color: "#93B3CE", textAlign: "center" }} className="font_c">
                                            Who we Are
                                        </h2>
                                    </div>
                                </div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default SchoolFacilities;