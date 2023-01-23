import styled from 'styled-components'
import TopBar from '../components/TopBar'
import Navigation from '../components/Navigation'

const Header = () => {
  return (
    <NavigationBox>
      <TopBar/>
      <Navigation/>
    </NavigationBox>
  )
}

const NavigationBox = styled.div`
  position: sticky; top: 0;
  z-index:1;
`

export default Header