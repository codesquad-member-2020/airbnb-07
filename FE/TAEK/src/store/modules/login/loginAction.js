const LOGIN = 'login/LOGIN';
const LOGOUT = 'login/LOGOUT';

const login = token => ({ type: LOGIN, payload: token });
const logout = () => ({ type: LOGOUT });

export {
    LOGIN,
    LOGOUT,
    login,
    logout,
}