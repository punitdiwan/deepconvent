import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

// import SimpleReactLightbox from "simple-react-lightbox";
import Layout from '../Component/Layout';
import Header from '../Component/Header';
import Footer from '../Component/Footer';



function MyApp({ Component, pageProps }) {
  return <>
    {/* <head>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

 


      <title>Deep Convent School</title>
    </head> */}
     
        
       
    <link
      rel="preload"
      href="../public/fonts/samsungsharpsans/samsungsharpsans.otf"
      as="font"
      crossOrigin=""
    />
     <Layout>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </Layout>
  </>
}

export default MyApp
