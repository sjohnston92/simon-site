import styled from 'styled-components'

const Navigation = () => {

  const handleClickScroll = () => {
    const element = document.getElementById('about');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
      <NavigationBox>
        <Nav>
        <NavigationButton onClick={handleClickScroll}>
          Home
        </NavigationButton>
        <NavigationButton onClick={(e) => {e.preventDefault();document.getElementById('about')}}>
          About
        </NavigationButton>
        <NavigationButton onClick={(e) => {e.preventDefault();window.location.href='/portfolio';}}>
          Portfolio
        </NavigationButton>
        <NavigationButton onClick={(e) => {e.preventDefault();window.location.href='/portfolio';}}>
          Contact
        </NavigationButton>
        </Nav>
      </NavigationBox>
  )
}

const NavigationBox = styled.div`
  margin-top: 1.5%;
  margin-left: 5%;
  margin-right: 5%;
  background: linear-gradient(0.25turn, #e555ac,#c481f3);;
  text-align: center;
  color: white;
  padding: 10px;
  border-radius: 20px 20px 20px 20px;
`


const Nav = styled.div`
  background: rgba(255, 255, 255, 0.56);
  border-radius: 30px;
  overflow: hidden;
  text-align: center;
  font-size: 18px;
  letter-spacing: 1px;
  color: #155FFF;
  position: relative;
  padding-right: 120px;
  position: relative;
`


const NavigationButton = styled.button`
  text-decoration: none;
  justify-content:center;
  font-family: lores-9-wide;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 30px;
  cursor: pointer;
  color:black;

`


export default Navigation

