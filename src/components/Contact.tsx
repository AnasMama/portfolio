import { useState } from "react";
import styled from "styled-components";
import Sakura from "./Sakura";

const Contact = () => {
  const [login, setLogin] = useState({ name: "", email: "", message: "" });

  const handleLogin = (event: any) => {
    setLogin({ ...login, [event.target.id]: event.target.value });
  };

  return (
    <ContactContainer>
      <Sakura />
      <h1>Contact</h1>
      <FormContent>
        <LabelField>
          <span>Votre nom :</span>
          <InputField
            type="text"
            id="name"
            // placeholder="Nom"
            value={login.name}
            onChange={handleLogin}
          />
        </LabelField>
        <LabelField>
          <span>Votre email :</span>
          <InputField
            type="email"
            id="email"
            // placeholder="Email"
            value={login.email}
            onChange={handleLogin}
          />
        </LabelField>
        <LabelField>
          <span>Votre message :</span>
          <TextField
            id="message"
            // placeholder="Message"
            value={login.message}
            onChange={handleLogin}
          />
        </LabelField>
        <ButtonRed type="submit">Envoyer</ButtonRed>
      </FormContent>
    </ContactContainer>
  );
};

const ContactContainer = styled.div`
  background-image: url('/src/images/sakura-branch.png');
  /* background-size: ; */
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  min-height: 100vh;

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
  background: whitesmoke;
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);

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
  background: whitesmoke;
  border-radius: 2rem;
  height: 8rem;
  width: min(90%, 36rem);

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
  color: var(--main-yellow);
  border: none;
  background: #FF5C7C;
  border-radius: 2rem;
  height: 4rem;
  width: min(90%, 36rem);
  margin: 1rem;

  @media (max-width: 768px) {
    height: 3rem;
  }
`;

export default Contact;
