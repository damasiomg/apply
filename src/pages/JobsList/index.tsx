import React, {useState, useEffect} from 'react';
import { jobApi } from '../../services/api';
import { Title, List } from './styles';
import NavigationHeader from '../../components/NavigationHeader';
import JobItem from '../../components/JobItem';
import FeedbackErrors from '../../components/FeedbackErrors';
import QuickRegistration from '../../components/QuickRegistration';

interface JobItemProps{
    id: number;
    name: string;
    status: string;
    profile: string;
    idUser: number | null;
    applications: number[];
    updateJobsList: () => void;
    updateFeedbackErrorList: (erros: string[]) => void;
}

interface UserProps{
    profile: string;
    idUser: number | null
}

const JobsList: React.FC = () => {

    const [jobs, setJobs] = useState<JobItemProps[]>([]);
    const [requestErrors, setRequestErrors] = useState<string[]>([]);


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

    useEffect(() => {
        if(user.profile === 'candidato' && !user.idUser){
            window.location.replace('/create-account');
            return;
        }

        getListData();

    }, []);

    const getListData = (): void => {
        jobApi.get(`/api/v1/jobs/list-all-jobs`).then(response => {
            if(response && response.data){

                if(user.profile === 'recrutador'){
                    setJobs(response.data.data);
                }else{
                    setJobs(response.data.data.filter((item: JobItemProps) => item.status === 'published'));
                }

            }
        }).catch(err => {
            return;
        })
    }

    return (
        <>
            <NavigationHeader profile={user.profile}/>
            <Title>Lista de vagas</Title>
            {(user.profile === 'recrutador') && <QuickRegistration updateJobsList={getListData} updateFeedbackErrorList={updateErrorsList} />}
            {(!!requestErrors.length) && <FeedbackErrors errors={requestErrors} />}
            <List>
                {jobs.map(job => <JobItem key={job.id} updateJobsList={getListData} updateFeedbackErrorList={updateErrorsList} applications={job.applications} profile={user.profile} idUser={user.idUser} id={job.id} name={job.name} status={job.status}/>)}
            </List>
        </>
    )
}

export default JobsList;