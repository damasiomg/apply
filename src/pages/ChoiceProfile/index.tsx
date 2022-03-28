import React, {useState, useEffect} from 'react';
import { jobApi } from '../../services/api';
import { Title, Container, Option} from './styles';
import NavigationHeader from '../../components/NavigationHeader';
import ApplicantImg from '../../assets/applicant.png';
import RecruterImg from '../../assets/recruter.png';
import InterviewerImg from '../../assets/interviewer.png';

interface JobItemProps{
    id: number;
    name: string;
    status: string
}

const ChoiceProfile: React.FC = () => {

    const [jobs, setJobs] = useState<JobItemProps[]>([]);

    const profiles = [
        {profile: 'candidato', img: ApplicantImg},
        {profile: 'recrutador', img: RecruterImg},
        {profile: 'entrevistador', img: InterviewerImg}
    ];

    const loadProfile = (profile: string): void => {
        localStorage.setItem('@Apply:user', JSON.stringify({profile, idUser: null}));
        window.location.replace('/jobs-list');
    }

    useEffect(() => {
        jobApi.get(`/api/v1/jobs/list-all-jobs`).then(response => {
            if(response && response.data){
                setJobs(response.data.data);
            }
        }).catch(err => {
            return;
        })
    }, []);

    return (
        <>

            <NavigationHeader profile={null}/>
            <Title>Qual seu perfil?</Title>
            <Container>
                {profiles.map(item => {
                    return (
                        <Option key={item.profile} onClick={() => loadProfile(item.profile)}>
                            <img src={item.img} alt={`Imagem de um(a) cadidato${item.profile}`}></img>
                            <span>{item.profile}</span>
                        </Option>
                    )
                })}
                
            </Container>
        </>
    )
}

export default ChoiceProfile;