import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import AccountPage from './components/screens/AccountPage/AccountPage';
import AdminPage from './components/screens/AdminPage/AdminPage';
import HomePage from './components/screens/HomePage/HomePage';
import LandingPage from './components/screens/LandingPage/LandingPage';
import PasswordForgetPage from './components/screens/PasswordForgetPage/PasswordForgetPage';
import SignInPage from './components/screens/SignInPage/SignInPage';
import * as ROUTES from './constants/routes';

const App: React.FC = () => (
    <Router>
        <Navigation />

        <hr></hr>

        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
    </Router>
)

export default App;
