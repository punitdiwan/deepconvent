import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import useSWR from 'swr';
import Layout from '../Component/Layout'
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';

const Achievements = () => {

    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1><b>Admission Procedure</b></h1>
                        <h3 style={{ color: "#93b3ce" }}>Rule for<b>  Admission</b></h3>

                        <p>Admission is purely based on merit. admissions are to be sought through duly filled up registration cum admission form,<br />
                            which is to be submitted in School Office on or before the specified date.<br />
                            As per Government Rules students above 5 years of age only shall be admitted to class 1.<br />
                            For Higher classes add one year for each class
                        </p>
                        <p>No candidates shall be admitted without Transfer Certificate from the last school attended, countersigned by an appropriate authority, and in no case shall a student be permitted to attend classes pending formal admission. If a student comes from an unrecognized school he/she can be given provisional admission Eligibility test subject to approval by the educational authorities of the District in which the School is situated.
                            In case of late admission of a student, the fee from the beginning of the First Term shall be charged unless otherwise ordered by the Principal.
                        </p>
                        <p>A student may be removed by the school authorities on any of the following grounds:<br/>
                            (a) Behavioral problem.<br/>
                            (b) Moral breach considered serious by the school authorities.<br/>
                            (c) Failing two times in the same class.
                        </p>

                        <h3 className="pt-5 mt-5" style={{ color: "#93b3ce" }}>Follow  <b>  Instructions</b></h3>

                        <div className="mb-5">
                            <div className="p-3 our_am_bdr">
                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span> Issue of Registration form does not guarantee admission. 
                                    </span>  </p>
                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    Registration fee is not refundable.
                                </p>
                                <p style={{ display: "flex" }}>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span><p>    Registration form is not transferable.

                                    </p></span> </p>

                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />   The following documents are to be submitted at the time of final completion of admission 
                                </p>
                                {/* <p style={{ display: "flex" }}>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span><p>    To build self worth in students so that they can recognize
                                    </p></span> </p>

                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..
                                </p> */}
                            </div>
                        </div>

                        <h3 className="pt-5 mt-5" style={{ color: "#93b3ce" }}>Get    <b>  Submission of Documents</b></h3>

                        <div className="mb-5">
                            <p className="mt-4 mb-4">Following Registration, duly filled Application form needs to be submitted along with the documents listed below within 5 days of the registration date.</p>
                            <div className="p-3 our_am_bdr">

                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span>  Attested copy of Birth certificate
                                    </span>  </p>
                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />   Copy of Address proof 
                                </p>
                                <p style={{ display: "flex" }}>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span><p>     6 passport size photos of the child and 1 each of the parents
                                    </p></span> </p>

                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    Vaccination card
                                </p>
                                <p style={{ display: "flex" }}>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} /> <span><p>   Blood group card or report
                                    </p></span> </p>

                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    Copy of Aadhar card
                                </p>
                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    Copy of Samagra ID
                                </p>
                                <p>
                                    <StarIcon style={{ height: "10px", marginRight: "7px" }} />    Cheque Photocopy
                                </p>
                            </div>
                        </div>

                        <h3 style={{ color: "#93b3ce" }}>Get  <b>  Admission procedure</b></h3>

                        <p className="pb-5 mb-5"><b> For admissions to Buniyad (the pre primary section) the procedure is as follows:</b><br />
                        he child along with the parents will be invited to a brief meeting with the Director / Head of Buniyad where the two sides will interact.
This interaction will determine whether the parents are involved with the upbringing of the child, and whether they will be able to participate with the school in the holistic education of the child.
                        </p>

                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Achievements;