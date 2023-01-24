import styled from 'styled-components'

const TopBar = () => {
  return (
      <BannerTop>
        Hey my name is Simon, welcome to my site!
      </BannerTop>
  )
}

const BannerTop = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  background: linear-gradient(0.25turn, #e555ac,#c481f3);;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 0px 0px 20px 20px;
`

export default TopBar