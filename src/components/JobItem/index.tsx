import React from 'react';
import { Link } from 'react-router-dom';
import { Job, JobInfo, ActionButton, ActionsJob } from './styles';
import { FiChevronRight } from 'react-icons/fi';
import { jobApi } from '../../services/api';


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

export const JobItem: React.FC<JobItemProps> = ({id, name, status, profile, idUser, applications, updateJobsList, updateFeedbackErrorList}) => {

    const handleApplyJob = (job: number, idUser: number | null): void => {

        jobApi.post(`/api/v1/jobs/apply/${job}`, {accountId: idUser}).then(response => {
            if(response && response.data){
                updateJobsList();
            }

        }).catch((err) => {
            updateFeedbackErrorList(err.response.data.message);
            return;
        })
    }

    const handlePublishJob = (job: number): void => {

        jobApi.patch(`/api/v1/jobs/publish-job/${job}`, {accountId: idUser}).then(response => {

            if(response && response.data){
                updateJobsList();
            }

        }).catch((err) => {
            updateFeedbackErrorList(err.response.data.message);
            return;
        })
    }

    return(
        <>
             <Job>
                <JobInfo>
                    {name} {(status === 'draft' && profile === 'recrutador') ? ' - não publicada' : ''}
                    {(status === 'published' && profile === 'recrutador') ? ' - publicada' : ''}
                    {(status === 'published' && profile === 'candidato' && idUser && applications.includes(idUser) ) ? ' - aplicada' : ''}

                    <ActionsJob>
                        {(status === 'draft' && profile === 'recrutador') && <Link to='#' onClick={() => handlePublishJob(id)}>
                            Publicar
                        </Link>}

                        {(status === 'published' && profile === 'candidato' && idUser && !applications.includes(idUser) ) && <Link to='#' onClick={() => handleApplyJob(id, idUser)}>
                            Aplicar
                        </Link>}

                        {(status === 'published' && profile === 'entrevistador') && <Link to={`/job-details?job=${id}`}>
                            Detalhes
                        </Link>}
                    </ActionsJob>
                </JobInfo>
                <ActionButton>
                {(status === 'published' && profile === 'entrevistador') && <Link to={`/job-details?job=${id}`}>
                        <FiChevronRight size={20}/>
                    </Link>}
                </ActionButton>
            </Job> 
        </>
    )
}

export default JobItem;