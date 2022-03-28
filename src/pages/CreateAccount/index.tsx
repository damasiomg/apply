import React, {useState, FormEvent} from 'react';
import { jobApi } from '../../services/api';
import { Title, Form, BoxInput, Error } from './styles';
import NavigationHeader from '../../components/NavigationHeader';
import FeedbackErrors from '../../components/FeedbackErrors';

interface UserProps{
    profile: string;
    idUser: number | null
}

const CreateAccount: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorName, setErrorName] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');
    const [requestErrors, setRequestErrors] = useState<string[]>([]);

    const [user, setUser] = useState<UserProps>(() => {
        const stringUser = localStorage.getItem('@Apply:user');
        if(stringUser){
            return JSON.parse(stringUser);
        }else{
            return {};
        }
    });

    async function handleAddUser(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(inputsAreOk()){
            const data = {name, email, password};
            jobApi.post(`/api/v1/accounts/create-account`, data).then(response => {

                if(response && response.data){
                    user.idUser = response.data?.data?.id || null;
                    localStorage.setItem('@Apply:user', JSON.stringify(user));
                    window.location.replace('/jobs-list');
                }
            }).catch((err) => {
                setRequestErrors(err.response?.data?.message || [])
                return;
            })

        }
    }

    const inputsAreOk = (): boolean => {
        const erros = [];

        if(name === ''){
            setErrorName('Por favor, informe o nome');
            erros.push('name');
        }

        if(email === ''){
            setErrorEmail('Por favor, informe o e-mail');
            erros.push('email');

        }

        if(password === ''){
            setErrorPassword('Por favor, informe a senha');
            erros.push('password');

        }
        
        if(erros.length){
            return false;
        }

        return true;
    } 


    return (
        <>
            <NavigationHeader profile={null} />
            <Title>Cadastro de candidato</Title>
            <Form onSubmit={handleAddUser}>
                <BoxInput>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setErrorName('')} 
                        placeholder="Seu nome"
                    />
                    {(errorName !== '') && <Error>{errorName}</Error>}
                </BoxInput>

                <BoxInput>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setErrorEmail('')} 
                        placeholder="Seu e-mail"
                    />
                    {(errorEmail !== '') && <Error>{errorEmail}</Error>}
                </BoxInput>
                <BoxInput>
                    <input
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setErrorPassword('')} 
                        placeholder="Crie uma senha"
                    />
                    {(errorPassword !== '') && <Error>{errorPassword}</Error>}
                </BoxInput>
                <BoxInput>
                    <button type="submit">Cadastrar</button>
                </BoxInput>
            </Form>

            {(!!requestErrors.length) && <FeedbackErrors errors={requestErrors} />}
        </>
    )
}

export default CreateAccount;