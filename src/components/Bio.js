import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie';
import animationData from '../assets/biolottie.json'

export const Bio = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <BioContainer>
        <BioPicContainer>
        <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
        />
        </BioPicContainer>
        <BioTextContainer>
          <BioText>
          <BioHead>About Me</BioHead>
          Skysail spike cog killick fire ship mizzen tack bring a spring upon her cable capstan strike colors. Trysail tackle topgallant parrel black spot wherry bounty doubloon piracy interloper. Rum Brethren of the Coast salmagundi grapple clap of thunder weigh anchor avast take a caulk pillage lanyard.
          </BioText>
        </BioTextContainer>
      </BioContainer>
  )
}
const BioContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: 10px;
  padding: 10px;
`
const BioPicContainer = styled.div`
  margin-left: 5%;
  width:50%;
  text-align: center;
  padding: 10px;
  border-radius: 20px 20px 20px 20px;
`
const BioTextContainer = styled.div`
  margin-top: 5%;
  width:50%;
  padding: 10px;
  height: 500px;
  border-radius: 20px 20px 20px 20px;
`
const BioHead = styled.div`
  margin-top:5%;
  margin-bottom:10px;
  text-transform:uppercase;
  text-align: center;
  font-size:55px;
  font-weight:900;
`
const BioText = styled.div`
  margin-left:5%;
  margin-right:5%;
  font-size:22px;
`
export default Bio
