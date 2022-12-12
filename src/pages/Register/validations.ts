import * as yup from "yup";

export const schema = yup.object({
    username: yup.string()
        .required('Nome de usuário é obrigatório')
        .min(5, 'Deve conter no mínimo 5 caracteres')
        .max(8, 'Deve conter no máximo 8 caracteres'),
    email: yup.string()
        .email('Digite um email válido')
        .required('Email é obrigatório'),
    password: yup.string()
        .matches(/[A-Z]/, 'Deve conter pelo menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter pelo menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter pelo menos 1 número')
        .matches(/(\W|_)/, 'Deve conter pelo menos 1 caracter especial')
        .matches(/.{8,}/, 'Deve conter no mínimo 8 caracteres')
        .required(),
    passwordConfirmation: yup.string()
        .oneOf(
            [yup.ref('password')], 
            'Confirmação de senha deve ser igual à senha'
        )
        .required('Confirmação de senha é obrigatória'),
}).required();