import { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { Main } from "./styles";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Main>
        <h1>Login</h1>
        <form>
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
          <Button type="submit" variant='primary'>Fazer Login</Button>
          <Link to='/register'>Não tem uma conta? Faça seu cadastro</Link> 
        </form>
    </Main>
    )
  }