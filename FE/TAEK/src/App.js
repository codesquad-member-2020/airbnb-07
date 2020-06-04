import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import NotFound from '@/components/error/NotFound';
import Login from '@/components/login/Login';
import Main from '@/components/main/Main';
import MyPage from '@/components/myPage/Mypage';

const App = () => {
    localStorage.clear();

    return (
        <ThemeProvider theme={theme}>
            <Router>
                <GlobalStyles />
                <Switch>
                    <Redirect from='/githublogin' to='/' />
                    <Route exact path='/' component={Main} />
                    <Route path='/login' component={Login} />
                    <Route path='/mypage' component={MyPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App
