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
      <NavigationMenu>
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
      </NavigationMenu>
  )
}

const NavigationMenu = styled.div`
  display:flex;
  justify-content:center;
  background:#ffffff;
  border-radius: 0px 0px 20px 20px;
  margin-left:5%;
  margin-right:5%;
  padding-top:15px;
  padding-bottom:10px;
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

