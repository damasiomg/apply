import React, {useState, FormEvent } from 'react';
import { jobApi } from '../../services/api';
import { Form, BoxInput, Error } from './styles';

interface QuickRegistrationProps{
    updateJobsList: () => void;
    updateFeedbackErrorList: (erros: string[]) => void;
}


const QuickRegistration: React.FC<QuickRegistrationProps> = ({updateJobsList, updateFeedbackErrorList}) => {

    const [name, setName] = useState<string>('');
    const [errorName, setErrorName] = useState<string>('');

    async function handleAddJob(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(inputsAreOk()){
            const data = {name };
            jobApi.post(`/api/v1/jobs/create-job`, data).then(response => {

                if(response && response.data){
                    updateJobsList();
                    setName(''); 
                }
            }).catch((err) => {
                updateFeedbackErrorList(err.response.data.message);
                return;
            })
        }
    }

    const inputsAreOk = (): boolean => {
        const erros = [];
        if(name === ''){
            setErrorName('Por favor, informe título da vaga');
            erros.push('name');
        }
        
        if(erros.length){
            return false;
        }

        return true;
    } 

    return (
        <>
            <Form onSubmit={handleAddJob}>
                <BoxInput>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={() => setErrorName('')} 
                        placeholder="Título da nova vaga"
                    />
                    {(errorName !== '') && <Error>{errorName}</Error>}
                </BoxInput>

                <BoxInput>
                    <button type="submit">Adcionar</button>
                </BoxInput>
            </Form>
        </>
    )
}

export default QuickRegistration;