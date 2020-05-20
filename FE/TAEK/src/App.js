import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import NotFound from './components/NotFound';
import Login from './components/login/Login';
import Main from './components/main/Main';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
                <Switch>
                    <Redirect exact from='/react/index.html' to='/' />
                    <Route exact path='/' component={Login} />
                    <Route path='/main' component={Main} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
