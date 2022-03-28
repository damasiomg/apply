import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

import { jobApi } from '../../services/api';
import { Title, List, Card } from './styles';
import NavigationHeader from '../../components/NavigationHeader';
import FeedbackErrors from '../../components/FeedbackErrors';

interface JobDetailsItem{
    id: number;
    name: string;
    email: string;
    password: string;
}

interface UserProps{
    profile: string;
    idUser: number | null
}

const JobDetails: React.FC = () => {

    const [requestErrors, setRequestErrors] = useState<string[]>([]);
    const jobId = (new URLSearchParams(useLocation().search)).get('job');
    const [applicationsList, setApplications] = useState<JobDetailsItem[]>([]);

    const [user, setUser] = useState<UserProps>(() => {
        const stringUser = localStorage.getItem('@Apply:user');
        if(stringUser){
            return JSON.parse(stringUser);
        }else{
            return {};
        }
    });

    const updateErrorsList = (errors: string[]): void => {
        setRequestErrors(errors);
    }

    const getListData = (): void => {
        jobApi.get(`/api/v1/jobs/view-applications/${jobId}`).then(response => {
            if(response && response.data){
                const auxArr: number[] = [];
                const uniqArr: JobDetailsItem[] = [];

                response.data.data.forEach((item: JobDetailsItem) => {
                    if(!auxArr.includes(item.id)){
                        uniqArr.push(item);
                        auxArr.push(item.id);
                    }
                });
                
                setApplications(uniqArr);
            }
        }).catch(err => {
            updateErrorsList([...requestErrors, err.response.data.message]);
            return;
        })
    }
    useEffect(() => {

        if(user.profile === 'candidato' && !user.idUser){
            window.location.replace('/create-account');
            return;
        }

        getListData();

    }, []);
    return (
        <>
            <NavigationHeader profile={user.profile}/>
            <Title>Candidatos aplicados</Title>
            {(!!requestErrors.length) && <FeedbackErrors errors={requestErrors} />}

            <List>
                {applicationsList.map(item => {
                    return(<Card key={item.id}>
                        <label><b>Candidato ID{item.id}</b>: {item.name}</label>
                        <label><b>Email</b>: {item.email}</label>
                    </Card>)
                })}
            </List>
        </>
    )
}

export default JobDetails;