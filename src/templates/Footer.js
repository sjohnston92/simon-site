import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import Lottie from 'react-lottie';
import animationData from '../assets/footlottie.json'

const Footer = () => {
  const [date,setDate] = useState('2023');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <BannerBottom>
      <BottomContainer>
      <IconContainer>
        <div>
          <BsGithub size={70} />
        </div>
        <div>
          <BsLinkedin size={70}/>
        </div>
      </IconContainer>
      </BottomContainer>
      <WhiteLine></WhiteLine>
      Simon's Portfolio Site - Updated {date}
    </BannerBottom>
  )
}

const WhiteLine = styled.div`
  height:2px;
  margin-bottom:5px;
  background: #ffffff;
  text-align: center;
  color: white;
  bottom:0;
`
const BottomContainer = styled.div`
  display:flex;
  flex-direction:row;
`
const IconContainer = styled.div`
  margin:2.5%;
  display:flex;
  width:100%;
  justify-content: space-around;
`

const BannerBottom = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background: linear-gradient(0.25turn,#c481f3,#e555ac);;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 20px 20px 0px 0px;
  bottom:0;
`

export default Footer