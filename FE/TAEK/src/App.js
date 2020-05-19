import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Login from './components/login/Login';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Switch>
                <Route exact path='/' component={Login} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}

export default App
