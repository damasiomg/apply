import React from 'react';
import { Error, BadRequest } from './styles';

interface FeedbackErrosProps{
    errors: string[]
}

const FeedbackErrors: React.FC<FeedbackErrosProps> = ({errors}) => {

    return (
        <>
            <BadRequest>
                {errors.map(error => <Error key={error}>{error}</Error>)}
            </BadRequest>
        </>
    )

}

export default FeedbackErrors;