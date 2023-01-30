import styled from 'styled-components'
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'

const Header = () => {
  return (
    <NavigationBox>
      <Navigation/>
    </NavigationBox>
  )
}

const NavigationBox = styled.div`
  position: sticky; 
  top: 1.5%;
  z-index:1;
  margin-top:1%;
`
export default Header