import React from 'react'
import Layout from '../Component/Layout'
import Link from 'next/link'

const Mandatory_disclosure = () => {
  return (
    <Layout>
     <div className="container-fluid media_top"  >
                <div className="container">
                  
                    <div className="location_header">
                        <h3 style={{backgroundImage: 'linear-gradient(to right, #272e38, #94d1f5)',
                           color:"#fdfdfd",padding:"10px"
                    }}>Mandatory</h3>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <h2><strong>A: GENERAL INFORMATION:</strong></h2>
                            <div style={{ overflowX: "auto" }}>

                                <table class="table table-bordered1">
                                    <thead>
                                        <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>NAME OF THE SCHOOL</td>
                                            <td>SANKALP PUBLIC SCHOOL</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>AFFILIATION NO.(IF APPLICABLE)</td>
                                            <td>1030699</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>U-DICE code Allotted to the school</td>
                                            <td>23320302433</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>COMPLETE ADDRESS WITH PIN CODE</td>
                                            <td>
                                            Bagsewania Main Road, Shivshakti Nagar, Ahmedpur Kalan, Bagmugaliya, Bhopal, Madhya Pradesh 462026

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>Name of Principal/ Head of Institution</td>
                                            <td> Mrs. Anu Shrivastava</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>Principal's Educational/Professional Qualifications:</td>
                                            <td>M.Sc. M.ed. <br /></td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <td>No of Experience (in Years):</td>
                                            <td>Administrative:10  Teaching:15<br /></td>
                                        </tr>

    
                                        <tr>
                                            <td>8</td>
                                            <td>EMAIL ID</td>
                                            <td>anushri301072@gmail.com<br /></td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td>Name of Trust/ Society/ Managing Committee</td>
                                            <td>Vaibhav laxmi siksha sanshthaan bhopal<br /></td>
                                        </tr>

                                        <tr>
                                            <td>10</td>
                                            <td>SCHOOL EMAIL ID</td>
                                            <td>schoolsankalp@gmail.com <br /></td>
                                        </tr>


                                        <tr>
                                            <td>11</td>
                                            <td>CONTACT DETAILS (LANDLINE/MOBILE)</td>
                                            <td>0755 241 8901</td>
                                        </tr>
                                        <tr>
                                            <td>12</td>
                                            <td>Status of The School</td>
                                            <td>Senior Secondary Level</td>
                                        </tr>
                                        <tr>
                                            <td>13</td>
                                            <td>Affiliation Period</td>
                                            <td>From : 01/04/2021  To : 31/03/2026 
</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h2><strong>B: DOCUMENTS AND INFORMATION:</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                        <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>DOCUMENTS/INFORMATION</th>
                                            <th>UPLOAD DOCUMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>COPIES OF AFFILIATION/UPGRADATION LETTER AND RECENT EXTENSION OF AFFILIATION, IF ANY</td>
                                            <td><a href="c.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>COPIES OF SOCIETIES/TRUST/COMPANY REGISTRATION/RENEWAL CERTIFICATE, AS APPLICABLE</td>
                                            <td><a href="socity.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>COPY OF NO OBJECTION CERTIFICATE (NOC) ISSUED, IF APPLICABLE, BY THE STATE GOVT./UT</td>
                                            <td><a href="c.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>COPIES OF RECOGNITION CERTIFICATE UNDER RTE ACT, 2009, AND IT’S RENEWAL IF APPLICABLE</td>
                                            <td><a href="extension2.jpg" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>COPY OF VALID BUILDING SAFETY CERTIFICATE AS PER THE NATIONAL BUILDING CODE</td>
                                            <td><a href="buildingPermission.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td>COPY OF VALID FIRE SAFETY CERTIFICATE ISSUED BY THE COMPETENT AUTHORITY</td>
                                            <td><a href="Firesafty.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td>COPY OF THE DEO CERTIFICATE SUBMITTED BY THE SCHOOL FOR AFFILIATION/UPGRADATION/EXTENSION OF AFFILIATIONOR SELF CERTIFICATION BY SCHOOL</td>
                                            <td><a href="DEO.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td>COPIES OF VALID WATER, HEALTH AND SANITATION CERTIFICATES</td>
                                            <td><a href="water.pdf" target="_blank">View</a>
                                            <a href="sanitat.pdf" target="_blank" style={{marginLeft:"15px"}}>View</a>
                                            </td>
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>C: RESULT AND ACADEMICS:</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                    <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>DOCUMENTS/INFORMATION</th>
                                            <th>UPLOAD DOCUMENTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>FEE STRUCTURE OF THE SCHOOL</td>
                                            <td><a href="Fee.jpg" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>ANNUAL ACADEMIC CALANDER.</td>
                                            <td><a href="anualcal.jpeg" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>LIST OF SCHOOL MANAGEMENT COMMITTEE (SMC)</td>
                                            <td><a href="sankalp_managing_commity.pdf" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>LIST OF PARENTS TEACHERS ASSOCIATION (PTA) MEMBERS</td>
                                            <td><a href="Parent_teacher_association.jpg" target="_blank">View</a></td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>LAST THREE-YEAR RESULT OF THE BOARD EXAMINATION AS PER APPLICABLILITY</td>
                                            <td></td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>RESULT CLASS: X</strong></h2>


                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                    <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>YEAR</th>
                                            <th>NO. OF REGISTERED STUDENTS</th>
                                            <th>NO. OF STUDENTS PASSED</th>
                                            <th>PASS PERCENTAGE</th>
                                            <th>REMARKS </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> 2018 </td>
                                            <td> 66 </td>
                                            <td> 66 </td>
                                            <td> 100 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> 2019 </td>
                                            <td> 89 </td>
                                            <td> 88 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> 2020 </td>
                                            <td>57  </td>
                                            <td>56 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>RESULT CLASS: XII</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                    <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>YEAR</th>
                                            <th>NO. OF REGISTERED STUDENTS</th>
                                            <th>NO. OF STUDENTS PASSED</th>
                                            <th>PASS PERCENTAGE</th>
                                            <th>REMARKS </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> 2018 </td>
                                            <td> 40 </td>
                                            <td> 36 </td>
                                            <td> 90.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> 2019 </td>
                                            <td> 73 </td>
                                            <td> 72 </td>
                                            <td> 99.0 </td>
                                            <td>  </td>
                                        </tr>
                                        <tr>
                                            <td> 3 </td>
                                            <td> 2020 </td>
                                            <td>70</td>
                                            <td>70</td>
                                            <td> 100 </td>
                                            <td>  </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <h2><strong>D: STAFF (TEACHING)</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                    <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> PRINCIPAL </td>
                                            <td>  </td>

                                        </tr>
                                        <tr>
                                            <td rowspan="3">2</td>
                                            <td>PGT</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>TGT</td>
                                            <td> </td>
                                        </tr>
                                        <tr>
                                            <td>PRT</td>
                                            <td> </td>
                                        </tr>

                                        <tr>
                                            <td>3</td>
                                            <td>DETAILS OF SPECIAL EDUCATOR</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td>DETAILS OF COUNSELLOR AND WELNESS TEACHER</td>
                                            <td>1</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td>TEACHERS SECTION RATIO</td>
                                            <td>1:10</td>
                                        </tr>
                                        <tr><td> 6 </td>
                                            <td> TOTAL NO. OF TEACHERS </td>
                                            <td> 53 </td>

                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-sm-12">
                            <h2><strong>E: SCHOOL INFRASTRUCTURE:</strong></h2>
                            <div style={{ overflowX: "auto" }}>
                                <table class="table table-bordered1">
                                    <thead>
                                    <tr style={{border:"1px solid"}}>
                                            <th>S.NO.</th>
                                            <th>INFORMATION</th>
                                            <th>DETAILS</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> 1 </td>
                                            <td> TOTAL CAMPUS AREA OF THE SCHOOL (IN SQUARE MTR) </td>
                                            <td> 7429.98 Sq.mtrs. </td>

                                        </tr>
                                        <tr><td> 2 </td>
                                            <td> NO. AND SIZE OF THE CLASS ROOMS (IN SQ MTR) </td>
                                            <td> 18  (20x30) </td>

                                        </tr>
                                        <tr>
                                            <td rowspan="5"> 3 </td>
                                            <td> NO. AND SIZE OF LABORATORIES INCLUDING COMPUTER LABS (IN SQ MTR) </td>
                                            <td> 4 </td>

                                        </tr>
                                        <tr>
                                             
                                            <td>Physics Lab</td>
                                            <td> 1</td>
                                             
                                        </tr>
                                        <tr>
                                            <td>Chemistry Lab</td>
                                            <td> 1</td>
                                        </tr>
                                        <tr>
                                            <td>Biology Lab</td>
                                            <td>1 </td>
                                        </tr>
                                        <tr>
                                            <td>Computer lab</td>
                                            <td>1 </td>
                                        </tr>
                                        <tr>
                                            <td> 4 </td>
                                            <td> INTERNET FACILITY (Y/N) </td>
                                            <td> Yes </td>

                                        </tr>
                                        <tr>
                                            <td> 5 </td>
                                            <td> NO. OF GIRLS TOILETS </td>
                                            <td> 15 </td>

                                        </tr>
                                        <tr>
                                            <td> 6 </td>
                                            <td> NO. OF BOYS TOILETS </td>
                                            <td> 15 </td>

                                        </tr>
                                        {/* <tr>
                                            <td> 7 </td>
                                            <td> LINK OF YOUTUBE VIDEO OF THE INSPECTION OF SCHOOL COVERING THE INFRASTRUCTURE OF THE SCHOOL </td>
                                            <td><a href="https://www.youtube.com/channel/UCIKlH_ibvWaviOlUTrFeQqg" target="_blank">View</a>  </td>

                                        </tr> */}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

    </Layout>
  )
}

export default Mandatory_disclosure