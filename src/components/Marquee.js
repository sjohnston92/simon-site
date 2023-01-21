import React from 'react'
import styled from 'styled-components'

const Marquee = () => {
  return (
    <MainContainer>
        <MainText>Hi I'm SIMON JOHNSTON</MainText>
    </MainContainer>
  )
}

const MainContainer = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background:black;
  text-align: center;
  padding: 10px;
  height: 500px;
  border-radius: 20px 20px 20px 20px;
`

const MainText= styled.div`
  color:#00FF23;
  font-size:70px;
`


export default Marquee