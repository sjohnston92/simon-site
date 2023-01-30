import React from 'react'
import styled from 'styled-components'
//component Import
import Marquee from '../components/Marquee'
import JobLogos from '../components/JobLogos'
import Skills from '../components/Skills'
import ContactForm from '../components/ContactForm'
import Bio from '../components/Bio'

import Cursor from '../assets/cur771.cur'


const Home = () => {
  return (
    <>
    <Containter style={{marginTop:'40px', cursor: 'url(../assets/cur771.cur),auto' }}>
      <ContainerTopBar>Hey my name is Simon, welcome to my site!</ContainerTopBar>
       <Marquee/>
    </Containter>
    <Bio/>
    <JobLogos/>
    <Skills/>
    <Containter>
      <ContainerTopBar>Hey my name is Simon, welcome to my site!</ContainerTopBar>
      <ContactForm />
    </Containter>
    </>
  )
}

const Containter = styled.div`
  margin-right: 5%;
  margin-left: 5%;
  background: silver;
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff;
  padding: 3px;
  cursor: url({Cursor});
`
const ContainerTopBar = styled.div`
  align-items: center;
  background: linear-gradient(90deg,navy,#1084d0);
  display: flex;
  justify-content: space-between;
  padding: 3px 2px 3px 3px;
  color: #fff;
  font-weight: 700;
  letter-spacing: 0;
`

export default Home