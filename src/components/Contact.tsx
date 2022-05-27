import { useState } from "react";
import styled from "styled-components";
import Sakura from "./Sakura";
import emailjs from "emailjs-com";

const Contact = () => {
  const [login, setLogin] = useState({ name: "", email: "", message: "" });

  const handleLogin = (event: any) => {
    setLogin({ ...login, [event.target.id]: event.target.value });
  };

  const submit = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_vwwb2yy', 'template_p06odxh', e.target, 'N0IS8ITBv2sAFVZek')
    .then((response) => console.log('SUCCESS!', response.status, response.text))
    .catch((error) => console.log('FAILED...', error));

    e.target.reset();
  }

  return (
    <ContactContainer>
      <Decors src="ressources/images/fuji.png" alt="Mont Fuji" />
      <Decors src="ressources/images/tori.png" alt="Temple japonais" />
      <Decors src="ressources/images/sakura.png" alt="Branche de sakura" />
      <Decors src="ressources/images/lake.png" alt="Lac" />
      <Sakura />
        <h1>Contactez-moi !</h1>
      <RightContainer>
        <FormContent onSubmit={submit}>
          <LabelField>
            <span>Votre nom :</span>
            <InputField
              type="text"
              id="name"
              name="nom"
              value={login.name}
              onChange={handleLogin}
            />
          </LabelField>
          <LabelField>
            <span>Votre email :</span>
            <InputField
              type="email"
              id="email"
              name="email"
              value={login.email}
              onChange={handleLogin}
            />
          </LabelField>
          <LabelField>
            <span>Votre message :</span>
            <TextField
              id="message"
              name="message"
              value={login.message}
              onChange={handleLogin}
            />
          </LabelField>
          <ButtonRed type="submit">Envoyer</ButtonRed>
        </FormContent>
      </RightContainer>
    </ContactContainer>
  );
};

const Decors = styled.img`
  position: absolute;
  left: 0;
  top: 14%;
  height: 100%;
  width: 100%;
  z-index: 1;

  :nth-child(1){
    top: 0;
  }

  :nth-child(3){
    top: 0;
  }

  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightContainer = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1000;
`;

const ContactContainer = styled.div`
  background: var(--main-yellow);
  background: linear-gradient(to bottom, var(--second-blue) 0%, white 100%);
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;

  h1 {
    margin-top: 7rem;
  }
`;

const FormContent = styled.form`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  margin: auto;
  gap: 3rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const LabelField = styled.label`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  gap: 2rem;
`;

const InputField = styled.input`
  font-size: 2rem;
  border: none;
  background: white;
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);
  z-index: 2;

  &:focus {
    outline: none !important;
    border: 4px solid var(--main-pink);
  }

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

const TextField = styled.textarea`
  font-size: 2rem;
  border: none;
  background: white;
  border-radius: 2rem;
  height: 8rem;
  width: min(90%, 36rem);
  z-index: 2;

  &:focus {
    outline: none !important;
    border: 4px solid var(--main-pink);
  }

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

const ButtonRed = styled.button`
  font-size: 2rem;
  color: white;
  border: none;
  background: var(--second-pink);
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);
  margin: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

export default Contact;
