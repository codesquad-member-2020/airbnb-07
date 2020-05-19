import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
                    <Route exact path='/react' component={Login} />
                    <Route path='/react/main' component={Main} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
