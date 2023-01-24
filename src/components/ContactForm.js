import React, { useState } from 'react';
import styled from 'styled-components'
import Lottie from 'react-lottie';
import { TypeAnimation } from 'react-type-animation';

const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: ""
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData);
    // make an API call or perform other logic here
    setFormData({
      name: "",
      email: "",
      comment: ""
    });
    setFormSubmitted(true);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  
  return (
    <ContactContainer>
      <ContactText> Contact Me</ContactText>
      {formSubmitted ? (
        <ContactSubmitText>
        <TypeAnimation
        sequence={['Thanks, I look forward to connecting with you!', 1000, ]}
        speed={35} 
        deletionSpeed={0}
        repeat={0}
      />
      </ContactSubmitText>
      ) : (
      <div>
      <form onSubmit={handleSubmit}>
      <ContactLabel>
        Name:
        <ContactInput
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </ContactLabel>
      <br />
      <ContactLabel>
        Email:
        <ContactInput
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </ContactLabel>
      <br />
      <ContactLabel>
        Comment:
        <ContactTextArea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      </ContactLabel>
      <br />
      <ContactSubmit type="submit">Submit</ContactSubmit>
    </form>
    </div>
      )}
    </ContactContainer>
  )
}
const ContactContainer = styled.div`
  margin:5px;
  background:#000000;
  text-align: center;
  height: 600px;
`
const ContactText= styled.div`
  color:#00FF23;
  font-size:70px;
  font-family: lores-9-wide;
`
const ContactSubmitText= styled.div`
  margin:30px;
  color:#00FF23;
  font-size:40px;
  text-transform:uppercase;
  font-family: lores-9-wide;
`

const ContactInput= styled.input`
  color:#00FF23;
  background:red;
  font-size:20px;
  font-family: lores-9-wide;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #00FF23;
`
const ContactTextArea= styled.textarea`
  color:#00FF23;
  background:red;
  font-size:20px;
  font-family: lores-9-wide;
  border: 0;
  outline: 0;
  background: transparent;
  border: 1px solid #00FF23;
`
const ContactLabel= styled.label`
  color:#00FF23;
  font-size:20px;
  font-family: lores-9-wide;
`

const ContactSubmit= styled.button`
  background:#00FF23;
  color:#000000;
  font-size:20px;
  font-family: lores-9-wide;
  text-transform:uppercase;
  padding: 10px;
  margin:10px;
  border: 1px solid #00FF23;
  text-align:center;
`


export default ContactForm