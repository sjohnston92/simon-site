import React from 'react'
import styled from 'styled-components'

const Navigation = () => {
  return (
      <NavigationMenu>
        <NavigationButton href="/">
          Home
        </NavigationButton>
        <NavigationButton href="/about">
          About
        </NavigationButton>
        <NavigationButton href='/portfolio'>
          Portfolio
        </NavigationButton>
        <NavigationButton href='/contact'>
          Contact
        </NavigationButton>
      </NavigationMenu>
  )
}

const NavigationMenu = styled.div`
  display:flex;
  justify-content:center;
`
const NavigationButton = styled.a`
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

