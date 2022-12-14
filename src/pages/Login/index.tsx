import { useContext, useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Button } from "../../styles/Button";
import { Main } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validations";
import { IUserLogin } from "./types";
import { AuthContext } from "../../providers/AuthContext";

export function Login() {
  const { login } = useContext(AuthContext);
  const { register, handleSubmit, formState: { errors } } = useForm<IUserLogin>({
    resolver: yupResolver(schema)
  });
  const [showPassword, setShowPassword] = useState(false);
  
    return (
      <Main>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(login)} noValidate>
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
          <Button type="submit" variant='primary'>Fazer Login</Button>
          <Link to='/register'>Não tem uma conta? Faça seu cadastro</Link> 
        </form>
    </Main>
    )
  }