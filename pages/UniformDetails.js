

import { SRLWrapper } from "simple-react-lightbox";
import Layout from '../Component/Layout'
import useSWR from "swr";
  
const AdmissionProcess = () => { 

  
  const slides = [
     
    { title: "/images/is16.jpg", description: 'View Gallery' },
    { title: "/images/is12.jpg ", description: 'View Gallery' },
    { title: " /images/is8.jpg ", description: 'View Gallery' },
    { title: " /images/is14.jpg ", description: 'View Gallery' },
    { title: "/images/is15.jpg  ", description: 'View Gallery' },
    { title: " /images/is16.jpg ", description: 'View Gallery' },
    

];


    return (
        <Layout>
            <SRLWrapper> 
        <div className="container-fluid">
          <div className="mb-3 row">
          {slides.map((item, i) => {
              return (
                <div key={i} className="col-lg-4 col-md-6 col-sm-6 ">
                  <img 
                    src={item?.title}
                    className="mt-3 imght "
                    alt="no_img"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </SRLWrapper>
        </Layout>
    )

}
export default AdmissionProcess