import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import Layout from '../Component/Layout'


const Principal = () => {

    return (
        <Layout>
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h1>School’s Mission</h1>
                            <h3 className="mt-4" style={{ color: "#93b3ce" }}> Our<b> Aim</b></h3>
                            <p>Deep Convent Public Schools aims to provide the best of our ability to the students. Our motto is "BELIEVE IN THE BEST"
                                and with this motto we give our best and bring the best out of students. New Maitretech Public School provides a perfect
                                environment where a student becomes both learner and innovator. Our effort is to provide students the quality of having experience, knowledge,
                                and good judgement; the quality of being wise and hence our name Maitretech is also defined in this process.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 row">
                        <div className="mb-5 col-sm-12">
                            <h3 className="mt-4" style={{ color: "#93b3ce" }}> Our<b> also  aims</b></h3>
                            <div className="p-3 our_am_bdr">
                                <p>
                                    <StarIcon style={{height:"10px" ,marginRight:"7px"}} /> <span> To help students achieve academic excellence in every possible way.To help students achieve academic excellence in every possible way.
                                    </span>  </p>
                                <p>
                                    <StarIcon style={{height:"10px" ,marginRight:"7px"}} />    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..
                                </p>
                                <p style={{display:"flex"}}>
                                   <StarIcon style={{height:"10px" ,marginRight:"7px"}} /> <span><p>    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..students so that they can recognize their talents and courageously face the competition of present times..students so that they can recognize their talents and courageously face the competition of present times..
                                    </p></span> </p>
                                
                                <p>
                                    <StarIcon  style={{height:"10px" ,marginRight:"7px"}}/>    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..
                                </p>
                                <p style={{display:"flex"}}>
                                   <StarIcon style={{height:"10px" ,marginRight:"7px"}} /> <span><p>    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..students so that they can recognize their talents and courageously face the competition of present times..students so that they can recognize their talents and courageously face the competition of present times..
                                    </p></span> </p> 
                                 
                                <p>
                                    <StarIcon style={{height:"10px" ,marginRight:"7px"}}/>    To build self worth in students so that they can recognize their talents and courageously face the competition of present times..
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    )

}
export default Principal


