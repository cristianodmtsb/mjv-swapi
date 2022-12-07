import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { BiUser } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { Main } from "./styles";

export function Register() {
    return (
      <Main>
        <h1>Criar Conta</h1>
        <form>
          <Input 
            id='username' 
            name='username' 
            label='Nome de usuário' 
            type='username'  
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
            type='password'
          >
            <MdLockOutline />
          </Input>
          <Input 
            id='confirm-password' 
            name='confirm-password' 
            label='Confirmar Senha' 
            type='password'
          >
            <MdLockOutline />
          </Input>
          <Button type="submit" variant='primary'>Criar Conta</Button>
        </form>
    </Main>
    )
  }