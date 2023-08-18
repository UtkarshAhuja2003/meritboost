import React from 'react'
import Navbar from '../../components/common/navbar'
import Head from '../../components/home/hero'
import Advantage from '../../components/home/advantage'
import About from '../../components/home/about'
import Demo from '../../components/home/demo'
import FAQ from '../../components/home/faq'
import Footer from '../../components/common/footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Head/>
      <Advantage/>
      <About/>
      <Demo/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home