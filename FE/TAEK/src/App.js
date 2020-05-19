import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Login from './components/login/Login';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
