import styled from 'styled-components'

const ContactForm = () => {
  return (
    <ContactContainer>
      <ContactText> Contact Me</ContactText>
    </ContactContainer>
  )
}
const ContactContainer = styled.div`
  margin-top: 10px;
  margin-right: 5%;
  margin-left: 5%;
  background:#000000;
  text-align: center;
  padding: 10px;
  height: 300px;
  border-radius: 20px 20px 20px 20px;
`
const ContactText= styled.div`
  color:#00FF23;
  font-size:70px;
  font-family: lores-9-wide;
`


export default ContactForm