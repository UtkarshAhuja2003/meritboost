import React from 'react'
import Navbar from '../../components/common/navbar'
import Head from '../../components/home/hero'
import Advantage from '../../components/home/advantage'
import About from '../../components/home/about'
import Demo from '../../components/home/demo'
import FAQ from '../../components/home/faq'
import Footer from '../../components/common/footer'

const Home = () => {
  let Links = [
    { name: "Why Us", link: "#whyus" },
    { name: "About", link: "#about" },
    { name: "Contact Us", link: "#contact" },
    { name: "FAQ", link: "#faq" },
  ];
  return (
    <div>
      <Navbar Links={Links}/>
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
