import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../assets/T-rex.json'


const Notfound = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };


  return (
    <FourContainer>
      <Lottie 
          options={defaultOptions}
          style={{margin:'2.5%', height: '600px', width: '95%' }}
          />
    </FourContainer>
  )
}

const FourContainer = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background:black;
  border-radius: 20px 20px 20px 20px;
`

export default Notfound