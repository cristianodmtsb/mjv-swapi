import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { Main } from "./styles";

export function Register() {
  const [showPassword, setShowPassword] = useState(false);

    return (
      <Main>
        <h1>Criar Conta</h1>
        <form>
          <Input 
            id='username' 
            name='username' 
            label='Nome de usuário' 
            type='text'  
          >
            <BiUser />
          </Input>
          <Input 
            id='email' 
            name='email' 
            label='Email' 
            type='email'  
          >
            <MdOutlineMail />
          </Input>
          <Input 
            id='password' 
            name='password' 
            label='Senha' 
            type={showPassword ? 'text' : 'password'}
          >
            <Button 
              type="button" 
              variant="icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
            { showPassword ? 
              <AiFillEyeInvisible/> :  <AiFillEye /> }  
            </Button>
          </Input>
          <Input 
            id='confirm-password' 
            name='confirm-password' 
            label='Confirmar Senha' 
            type={showPassword ? 'text' : 'password'}
          >
            <Button 
              type="button" 
              variant="icon" 
              onClick={() => setShowPassword(!showPassword)}
            >
              { showPassword ? 
              <AiFillEyeInvisible/> :  <AiFillEye /> } 
            </Button>
          </Input>
          <Button type="submit" variant='primary'>Criar Conta</Button>
        </form>
    </Main>
    )
  }