import { SRLWrapper } from "simple-react-lightbox";
import Layout from "../Component/Layout";
import useSWR from "swr";
import axios from "axios";

const Gallery = () => {
  // Function to fetch data from API
  const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  // Replace API_ENDPOINT with the actual API endpoint
  const API_ENDPOINT = "https://cms.maitretech.com/deepconvent/items/gallery?fields=*.*";
  const { data, error } = useSWR(API_ENDPOINT, fetcher);
  

  if (error) {
    return <div>Error loading data</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // Extract the image data from the API response
  const images = data.data;
  console.log("check", images)

  return (
    <Layout>
      <SRLWrapper>
        <div className="container-fluid">
          <div className="mb-3 row">
            {
                images.map((item,i)=>{
                    console.log("check", item)
                    return(
                        <div key={i} className="col-lg-4">
                        <img src={item?.photo?.data?.full_url} className="mt-3 imght" alt={`Image ${i}`} />
                      </div>
                    )
                })
            }
          </div>
        </div>
      </SRLWrapper>
    </Layout>
  );
};

export default Gallery;











// import { SRLWrapper } from "simple-react-lightbox";
// import Layout from '../Component/Layout'
// import useSWR from "swr";

 

// const Gallery = () => { 
  

//   const slides = [
//     { title: "/images/is7.jpg", description: 'View Gallery' }, 
//     { title: "/images/is8.jpg  ", description: 'View Gallery' },
//     { title: " /images/is9.jpg ", description: 'View Gallery' },
//     { title: "/images/is11.jpg  ", description: 'View Gallery' },
//     { title: " /images/is12.jpg ", description: 'View Gallery' },
//     { title: "/images/is14.jpg  ", description: 'View Gallery' }, 

// ];
 
//   return (
//     <Layout>
//       <SRLWrapper>
//         {/* <div
//           className="p-12"
//           style={{
//             minHeight: "95vh",
//             backgroundColor: "#3bb78f",
//             backgroundImage: "linear-gradient(315deg, #3bb78f 0%, #0bab64 74%)",
//           }}
//         >
//           <div className="grid gap-4 mt-16 sm:grid-cols-12 lg:grid-cols-12 lg:mt-28">
//             {data.data.map((item, i) => {
//               return (
//                 <div key={item.id} className="lg:col-span-3 sm:col-span-12">
//                   <img
//                     src={item?.image?.data?.full_url}
//                     className="h-64 rounded-lg"
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div> */}

//         <div className="container-fluid">
//           <div className="mb-3 row">
//           {slides.map((item, i) => {
//               return (
//                 <div key={i} className="col-lg-4">
//                   <img
//                     // src={item?.image?.data?.full_url}
//                     src={item?.title}
//                     className="mt-3 imght "
//                   />
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </SRLWrapper>
//     </Layout>
//   );
// };

// export default Gallery

