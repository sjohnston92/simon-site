import {useState,useEffect} from 'react'
import styled from 'styled-components'

//images
import msp from '../assets/msplogo.png';
import scan123 from '../assets/scan123.png';
import difenda from '../assets/White-Difenda-Logo.png';

const JobLogos = () => {
  const images = [
    msp,
    difenda
  ]
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  return (
    <>
      <JobsContainer>
        <JobHead>Proffesional Work</JobHead>
        <img src={images[currentIndex]} alt="Carousel Image" />
      </JobsContainer>
    </>
  )
}

const JobsContainer = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background: linear-gradient(0.25turn, #e555ac,#c481f3);;
  height: 200px;
  border-radius: 20px 20px 20px 20px;
`
const JobHead = styled.div`
  padding-top:30px;
  color:white;
  text-transform:uppercase;
  text-align: center;
  font-size:45px;
  font-weight:900;
`

const JobLogo = styled.img`
  width: 300px;
  height: 80px;
`


export default JobLogos