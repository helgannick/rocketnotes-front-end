import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Container, Form, Avatar } from "./styles";

import { Link } from "react-router-dom";


import { Button } from "../../components/Button"
import { Input } from "../../components/Input";

export function Profile() {
  return (
    <Container>
      <header>
        < Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>

        <Avatar>
          <img 
          src="https://github.com/helgannick.png" 
          alt="Foto do usuário"/>

          <label htmlFor="avatar">
            <FiCamera/>
            <input
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>

        <Input 
        placeholder="Nome" 
        type="text" 
        icon={FiUser} 
        />

        <Input 
        placeholder="E-mail" 
        type="email"  
        icon={FiMail} 
        />

        <Input 
        placeholder="Senha atual" 
        type="password" 
        icon={FiLock} 
        />

        <Input 
        placeholder="Nova senha" 
        type="password" 
        icon={FiLock} 
        />

        <Button title='Salvar'/>

      </Form>
    </Container>
  );
}
