import React from 'react'
import styled from 'styled-components'
//component Import
import Marquee from '../components/Marquee'
import JobLogos from '../components/JobLogos'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import Bio from '../components/Bio'


const Home = () => {
  return (
    <>
      <Marquee/>
      <Bio/>
      <JobLogos/>
      <Skills/>
      <ContactForm />
    </>
  )
}

export default Home