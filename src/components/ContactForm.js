import React, { useState } from 'react';
import styled from 'styled-components'
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


  
  return (
    <ContactContainer>
      <ContactBox>
      <ContactText>Contact Me!</ContactText>
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
      <FormContact onSubmit={handleSubmit}>
      <ContactLabel htmlFor="name">
        Name:
      </ContactLabel>
        <ContactInput
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

      <ContactLabel htmlFor="email">
        Email:
      </ContactLabel>
        <ContactInput
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      <ContactLabel htmlFor="text">
        Comment:
      </ContactLabel>
        <ContactTextArea
          id="text"
          name="comment"
          value={formData.comment}
          onChange={handleChange}
        />
      <ContactSubmit type="submit">Submit</ContactSubmit>
    </FormContact>
    </div>
      )}
    </ContactBox>
    </ContactContainer>
  )
}
const ContactContainer = styled.div`
  margin:5px;
  background:#000000;
  text-align: center;
  display:flex;
  justify-content:center;
  padding:20px;
`
const ContactBox = styled.div`
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  height:500px;
`
const ContactText= styled.div`
  color:#00FF23;
  font-size:70px;
  font-family: lores-9-wide;
`
const FormContact = styled.form`
  display: flex; 
  flex-direction: column; 
  padding:20px;
`

const ContactSubmitText= styled.div`
  margin:30px;
  color:#00FF23;
  font-size:40px;
  text-transform:uppercase;
  font-family: lores-9-wide;
`

const ContactInput= styled.input`
  margin: 5px;
  margin-bottom:10px;
  color:#00FF23 !important;
  font-size:20px;
  font-family: lores-9-wide;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid #00FF23;
`
const ContactTextArea= styled.textarea`
  margin-top:15px;
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
  text-align: start;
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
  margin-top:50px;
`


export default ContactForm