import React from 'react'
import styled from 'styled-components'
//component Import
import Marquee from '../components/Marquee'
import JobLogos from '../components/JobLogos'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import Bio from '../components/Bio'
import Portfolio from '../components/Portfolio'


const Home = () => {
  return (
    <>
      <Marquee/>
      <Bio/>
      <JobLogos/>
      <Skills/>
      <Portfolio/>
      <ContactForm />
    </>
  )
}

export default Home