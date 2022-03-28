import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import JobsList from '../pages/JobsList';
import ChoiceProfile from '../pages/ChoiceProfile';
import CreateAccount from '../pages/CreateAccount';
import JobDetails from '../pages/JobDetails';

const Routes: React.FC = () => (
    <BrowserRouter> 
        <Switch>
            <Route path='/' exact component={ChoiceProfile}/>
            <Route path='/jobs-list' component={JobsList}/>
            <Route path='/create-account' component={CreateAccount}/>
            <Route path='/job-details' component={JobDetails}/>
        </Switch>
    </BrowserRouter>
)

export default Routes;