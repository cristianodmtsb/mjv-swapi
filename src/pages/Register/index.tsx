import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { IRegisterData } from "./types";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { Main } from "./styles";

export function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterData>({
    resolver: yupResolver(schema)
  });

  async function registerUser(data: IRegisterData) {
    try {            
        await registerUser(data);
        console.log('Cadastro realizado com sucesso');
    } catch (error) {
        console.error(error);
    }
  }

    return (
      <Main>
        <h1>Criar Conta</h1>
        <form onSubmit={handleSubmit(registerUser)} noValidate>
          <Input 
            id='username' 
            label='Nome de usuário' 
            type='text'  
            error={errors.username?.message}
            {...register('username')}
          >
            <BiUser />
          </Input>
          <Input 
            id='email' 
            label='Email' 
            type='email'  
            error={errors.email?.message}
            {...register('email')} 
          >
            <MdOutlineMail />
          </Input>
          <Input 
            id='password' 
            label='Senha' 
            type={showPassword ? 'text' : 'password'}
            error={errors.password?.message} 
            {...register('password')} 
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
            label='Confirmar Senha' 
            type={showPassword ? 'text' : 'password'}
            error={errors.passwordConfirmation?.message}
            {...register('passwordConfirmation')}
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