import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../Component/Layout'
import HomePageSlider from './HomePageSlider'
import AboutSchool from './AboutSchool'
import SchoolFacilities from './SchoolFacilities'
import HomePageGallery from './HomePageGallery'
import HomeNewsClder from './HomeNewsClder'
// import Header from '../Component/Header'
// import Footer from '../Component/Footer'

export default function Home() {
  return (
    <div>
      <Layout>
        {/* <Header/> */}
        <HomePageSlider />
        <SchoolFacilities/>
        <AboutSchool/>
        
        {/* <HomePageGallery/> */}
        {/* <HomeNewsClder/> */}
        {/* <Footer/> */}
      </Layout> 
    </div>
  )
}
